import { ItemDto } from 'shared-frontend';

export default function ItemCardComponent(props: { data: { item: ItemDto; }; }) {
    const  item  = props.data.item;     


    return  <li key= {item.id} className="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50/10">
                <div className="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                </div>
                <div className="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                    <h3 className="text-white font-medium text-md">{item.name}</h3>
                    <p className="text-gray-600 mt-1 font-regular text-sm">{item.description}</p>
                </div>
            </li>
};