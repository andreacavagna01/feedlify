import { ItemDto } from 'shared-frontend';
import { deleteItem } from '@/services/itemService';
import Link from 'next/link';

export default function ItemCardComponent(props: { data: { item: ItemDto; }, key:string, handleDelete: any }) {
    const  item  = props.data.item;
    
    return  <li key= {item.id} className="relative flex gap-4 align-left items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50/10">
                <Link className="flex justify-center items-center" href={`/item/${item.id}`}>
                    Link to ITEM PAGE
                </Link>
                <div className="pl-8 border-l-2 border-solid border-gray">
                    <h3 className="text-white font-medium text-md">{item.name}</h3>
                    <p className="text-gray-600 mt-1 font-regular text-sm">{item.description}</p>
                </div>
                <div onClick={() => props.handleDelete(item.id)} className="absolute right-5 flex justify-center items-center">
                    <h3 className="text-white font-medium text-md">x</h3>
                </div>
                
            </li>
};