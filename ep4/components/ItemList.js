import { CDN_URL } from "../utils/constants"

export const ItemList = ({items}) => {
    //  console.log(items)
    return(
        <div>
           {items.map((item)=> {
            return (
                <div key={item.card.info.id} className="flex justify-between p-2 m-1 border-b-2 text-left items-center">
                    <div className=" w-9/12">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                    </div>   
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>

                <div className="w-3/12 p-4 relative">
                    <div className="absolute bottom-0 ">
                        <button className="bg-black text-white shadow-lg text-sm rounded-sm p-[2px] ">Add+</button>
                    </div>

                    <img src= {CDN_URL + item.card.info.imageId} className=" w-full"
                    />
                </div>
                </div>
            )
           })} 
        </div>
    )
}