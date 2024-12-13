import { ItemList } from "./ItemList"

export const RestaurantCategory = ({data}) =>{
    return (
        <div>
            <div  className="w-6/12 bg-gray-100 mx-auto my-4 shadow-md p-4 ">
            <div className="flex justify-between">
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>

            <ItemList items={data.itemCards} />
           </div>
        </div>
    )
}