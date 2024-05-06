"use client";
import { getItem } from "@/services/itemService";
import { useState, useEffect, Suspense } from "react";
import { ItemDto } from "shared-frontend";
import Loading from "../loading";

export default function Page({ params }: { params: { item: string } }) {

  const [item, setItem] = useState<ItemDto>();
    
  useEffect(() => {
    getItem(params.item)
    .then(res => {
      setItem(res);
    })
  }, [] );

    return <div>
      <Suspense fallback={<Loading/>}>
        <h1>{item?.name}</h1>
        <h2>{item?.description}</h2>
        <p><span>Item ID</span> {item?.id}</p>
        <p><span>Created At</span> {item?.createdAt?.toString()}</p>
        <p><span>Updated At</span> {item?.updatedAt?.toString()}</p>
      </Suspense>
    </div>
  }