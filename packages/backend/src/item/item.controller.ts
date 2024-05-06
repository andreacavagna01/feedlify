import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemDto } from './dto/item.dto';
import { Item } from './entities/item.entity';
import { QueryFailedError } from 'typeorm';

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
      createdAt: item.created_at,
      updatedAt: item.updated_at,
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
        createdAt: item.created_at,
        updatedAt: item.updated_at,
      });
    });
    return itemsDto;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ItemDto> {
    try {
      const item: Item = await this.itemService.findOne(id);
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        createdAt: item.created_at,
        updatedAt: item.updated_at,
      };
    } catch (e) {
      if (e instanceof QueryFailedError) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: `The Item with id: ${id} is not found`,
          },
          HttpStatus.NOT_FOUND,
          {
            cause: e,
          },
        );
      } else {
        throw e;
      }
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    try {
      await this.itemService.update(id, updateItemDto);
      return this.itemService.findOne(id);
    } catch (e) {
      if (e instanceof QueryFailedError) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: `The Item with id: ${id} is not found`,
          },
          HttpStatus.NOT_FOUND,
          {
            cause: e,
          },
        );
      } else {
        throw e;
      }
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.itemService.remove(id);
    } catch (e) {
      if (e instanceof QueryFailedError) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: `The Item with id: ${id} is not found`,
          },
          HttpStatus.NOT_FOUND,
          {
            cause: e,
          },
        );
      } else {
        throw e;
      }
    }
  }
}
