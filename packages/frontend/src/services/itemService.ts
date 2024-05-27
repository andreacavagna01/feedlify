import useSWR from 'swr';
import { Api } from './api.client';
import { CreateItemDto, ItemDto } from 'shared-frontend'

export async function getItems() {
    try {
        console.log("get items");
        return Api.get(`/item`);
      } catch (error) {
        throw error;
      }
    }

export async function getItem(id: string) {
  try {
      return await Api.get(`/item/${id}`);
    } catch (error) {
      throw error;
    }
}

export async function createItem(createItemDto: CreateItemDto) : Promise<ItemDto> {
  try {
      const response =  await Api.post(`/item`, createItemDto);
      return await response?.json();
    } catch (error) {
      throw error;
    }
}

export async function deleteItem(id: string) {
  try {
      return await Api.delete(`/item/${id}`);
    } catch (error) {
      throw error;
    }
}