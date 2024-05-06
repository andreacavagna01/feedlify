import useSWR from 'swr';
import { Api } from './api.client';
import { CreateItemDto } from 'shared-frontend'

export async function getItems() {
    try {
        console.log("get items");
        return Api.get(`/item`);
      } catch (error) {
        console.error(error);
      }
    }

export async function getItem(id: string) {
  try {
      return await Api.get(`/item/${id}`);
    } catch (error) {
      console.error(error);
    }
}

export async function createItem(createItemDto: CreateItemDto) {
  try {
      return await Api.post(`/item/create}`, createItemDto);
    } catch (error) {
      console.error(error);
    }
}

export async function deleteItem(id: string) {
  try {
      return await Api.delete(`/item/${id}`);
    } catch (error) {
      console.error(error);
    }
}