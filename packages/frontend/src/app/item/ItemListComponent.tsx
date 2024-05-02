import ItemCardComponent from "@/ui/ItemCardComponent";
import { ItemDto } from "shared-frontend";

export default function ItemListComponent(props: { items: ItemDto[]; handleDelete: any}) {
  return (
    <div className="item-list">
      <ul>
        {props.items.map((item: ItemDto) => (
          <ItemCardComponent 
            key= {item.id}
            data={{ item }} 
            handleDelete={() => {props.handleDelete(item.id); console.log("here")}}
          />
        ))}
      </ul>
    </div>
  );
};