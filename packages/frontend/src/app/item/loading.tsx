"use client";
import { getItems } from '@/services/itemService';
import ItemCardComponent from '@/ui/ItemCardComponent';
import { useState, useEffect } from 'react';
import { ItemDto } from 'shared-frontend';

export default function Loading() {
  return  <div>LOADING</div>
}