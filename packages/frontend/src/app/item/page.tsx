"use client";
import { getItems } from '@/services/itemService';
import ItemCardComponent from '@/ui/ItemCardComponent';
import { useState, useEffect } from 'react';
import { ItemDto } from 'shared-frontend';

export default function ItemPage() {
  const [items, setItems] = useState<ItemDto[]>([]);
    
  useEffect(() => {
    getItems()
    .then(res => {
      setItems(res);
    })
  }, [] );
  
  return <div>
      <h1>ITEMS PAGE</h1>
      <h2>SUBTITLE HERE</h2>
      <ul className='container px-5 py-10 mx-auto divide-gray-100'>
        {items.map( (item)=> (
        <ItemCardComponent data={{ item }} ></ItemCardComponent>
        ))}
      </ul>
  </div>
}