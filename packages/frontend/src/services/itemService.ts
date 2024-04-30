import { Api } from './api.client';
import { ItemDto } from 'shared-frontend'

export async function getItems() {
    try {
        return await Api.get(`/item`);
      } catch (error) {
        console.error(error);
      }
}