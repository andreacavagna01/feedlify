"use client";
import { getItems } from '@/services/itemService';
import ItemCardComponent from '@/ui/ItemCardComponent';
import { useState, useEffect, Suspense } from 'react';
import { ItemDto } from 'shared-frontend';
import Loading from './loading';

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
      <Suspense fallback={<Loading/>}>
        <ul className='container px-5 py-10 mx-auto divide-gray-100'>
          {items.map( (item)=> (
          <ItemCardComponent data={{ item }} ></ItemCardComponent>
          ))}
        </ul>
      </Suspense>
  </div>
}