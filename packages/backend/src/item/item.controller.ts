import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemDto } from './dto/item.dto';
import { Item } from './entities/item.entity';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<ItemDto> {
    const item = await this.itemService.create(createItemDto);
    return {
      id: item.id,
      name: item.name,
      description: item.description,
    };
  }

  @Get()
  async findAll(): Promise<ItemDto[]> {
    const items = await this.itemService.findAll();
    const itemsDto: ItemDto[] = [];
    items.forEach((item) => {
      itemsDto.push({
        description: item.description,
        id: item.id,
        name: item.name,
      });
    });
    return itemsDto;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const item: Item = await this.itemService.findOne(id);
    return {
      id: item.id,
      name: item.name,
      description: item.description,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    await this.itemService.update(id, updateItemDto);
    return this.itemService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemService.remove(id);
  }
}
