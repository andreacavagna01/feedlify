import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const item: Item = {
      id: uuidv4(),
      name: createItemDto.name,
      description: createItemDto.description,
    };
    return await this.itemRepository.save(item);
  }

  async findAll() {
    return this.itemRepository.find();
  }

  findOne(id: string) {
    return this.itemRepository.findOne({ where: { id: id } });
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    return await this.itemRepository.update(id, updateItemDto);
  }

  async remove(id: string) {
    await this.itemRepository.delete(id);
  }
}
