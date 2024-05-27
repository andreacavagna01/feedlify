"use client";
import { getItems, deleteItem, createItem } from '@/services/itemService';
import ItemCardComponent from '@/ui/ItemCardComponent';
import { useState, useEffect, Suspense } from 'react';
import { CreateItemDto, ItemDto } from 'shared-frontend';
import Loading from './loading';
import ItemListComponent from './ItemListComponent';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from '@nextui-org/react';

export default function ItemPage() {
  const [items, setItems] = useState<ItemDto[]>([]);
    
  useEffect(() => {
    getItems()
    .then(res => {
      setItems(res);
    })
  }, [] );

  const deleteItemAction = (id: string) => {
    console.log("deleting " + id);
    deleteItem(id);
    setItems(items => items.filter((item) => item.id !== id));
  };


  const addItem = (formData: FormData) => {
    var formDataJSON : any = {};
    formData.forEach(function(value, key){
      formDataJSON[key] = value;
    });
    const createItemDTO : CreateItemDto = {
      name: formDataJSON.title,
      description: formDataJSON.description
    }
    createItem(createItemDTO).then(item => {
      setItems( // Replace the state
        [ // with a new array
          ...items, // that contains all the old items
          // and one new item at the end
          item
        ]
      );
    });

    return onClose();
  }

  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

  return <div>
      <h1 className='text-4xl font-bold'>ITEMS PAGE</h1>
      <h2 className='text-2xl'>SUBTITLE HERE</h2>
      <Button onPress={onOpen} >Open Modal</Button>
      <Suspense fallback={<Loading/>}>
        <ItemListComponent items={items} handleDelete={deleteItemAction}></ItemListComponent>
      </Suspense>

      <Modal
        backdrop='blur'
        className='text-black'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
        
            {(onClose) => (
              <form action={addItem}>
                <ModalHeader className="flex flex-col gap-1 font-semibold">
                  Add Item  
                </ModalHeader>
                <ModalBody>
                  <Input isRequired type="title" label="Title" name="title" />
                  <Textarea
                    name="description"
                    isRequired
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                    className="max-w-xs"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button type="submit" color="primary">
                    Add Item
                  </Button>
                </ModalFooter>
              </form>
            )}
        </ModalContent>
      </Modal>
  </div>
}