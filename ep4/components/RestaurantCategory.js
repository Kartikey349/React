import { useState } from "react"
import { ItemList } from "./ItemList"

export const RestaurantCategory = ({data, showItems, setShowIndex}) =>{

    const handleClick = () =>{
        // if(showItem === false){
        //     setShowItem(true);
        // }else{
        //     setShowItem(false);
        // }
        setShowIndex();
    }

    return (
        <div>
            <div  className="w-6/12 bg-gray-100 mx-auto my-4 shadow-md p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>

                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>

                    <span><i className="fa-solid fa-arrow-down"></i></span>
                    
                </div>

                {showItems && <ItemList items={data.itemCards} />}
           </div>
        </div>
    )
}