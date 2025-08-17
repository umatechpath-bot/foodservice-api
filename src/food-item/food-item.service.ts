import { Injectable } from '@nestjs/common';
import { CreateFoodItemDto } from './dto/create-food-item.dto';
import { UpdateFoodItemDto } from './dto/update-food-item.dto';
import { FoodItem } from './entities/food-item.entity';
import { FOOD_ITEMS } from '../constants';


@Injectable()
export class FoodItemService {
  private items: FoodItem[] = [];

  create(dto: CreateFoodItemDto) {
    const newItem = { id: Date.now(), ...dto };
    this.items.push(newItem);
    return newItem;
  }

  findAll() {
    //return this.items;
    return FOOD_ITEMS;
  }

  findOne(id: number) {
    return `This action returns a #${id} foodItem`;
  }

  update(id: number, updateFoodItemDto: UpdateFoodItemDto) {
    return `This action updates a #${id} foodItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodItem`;
  }
}
