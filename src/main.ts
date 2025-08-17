import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';
import { Request, Response } from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
    // Get the raw Express instance
  const expressApp = app.getHttpAdapter().getInstance();
  app.enableCors(); // ✅ Add this
  // Serve static files from Angular
  expressApp.use(express.static(join(__dirname, '..', 'public')));

  // This handles Angular routes, sends index.html on unmatched routes
  // app.get('*', (req, res) => {
  //   res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  // });

 // Fallback for Angular routing
  expressApp.get('*', (_req: Request, res: Response) => {
    res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
