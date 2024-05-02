"use client";
import { getItems, deleteItem } from '@/services/itemService';
import ItemCardComponent from '@/ui/ItemCardComponent';
import { useState, useEffect, Suspense } from 'react';
import { ItemDto } from 'shared-frontend';
import Loading from './loading';
import ItemListComponent from './ItemListComponent';

export default function ItemPage() {
  const [items, setItems] = useState<ItemDto[]>([]);
    
  useEffect(() => {
    getItems()
    .then(res => {
      setItems(res);
    })
  }, [] );

  const deleteItemAction = (id: string) => {
    console.log("deleting");
    deleteItem(id);
    setItems(items => items.filter((item) => item.id !== id));
  };
  
  return <div>
      <h1>ITEMS PAGE</h1>
      <h2>SUBTITLE HERE</h2>
      <Suspense fallback={<Loading/>}>
        <ItemListComponent items={items} handleDelete={deleteItemAction}></ItemListComponent>
      </Suspense>
  </div>
}