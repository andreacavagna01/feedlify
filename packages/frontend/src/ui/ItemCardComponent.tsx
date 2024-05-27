import { ItemDto } from 'shared-frontend';
import { deleteItem } from '@/services/itemService';
import Link from 'next/link';
import { Card, CardHeader, Divider, CardBody, CardFooter, Image } from '@nextui-org/react';

export default function ItemCardComponent(props: { data: { item: ItemDto; }, key:string, handleDelete: any }) {
    const  item  = props.data.item;
    
    return <Card className="mb-5" key= {item.id}>
            <CardHeader className="flex gap-3">
            <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
            />
            <div className="flex flex-col">
                <p className="text-md">{item.name}</p>
                <p className="text-small text-default-500">{item.id}</p>
            </div>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p>{item.description}</p>
            </CardBody>
            <Divider/>
            <CardFooter>
            <Link
                href={`/item/${item.id}`}
            >
                Show the Item
            </Link>
            </CardFooter>
        </Card>
};

