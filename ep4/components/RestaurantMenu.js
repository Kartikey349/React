import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";

export const RestaurantMenu = () => {
    
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer />;


    const {name,
        cuisines,
        costForTwoMessage,
    } = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;


    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> {
       return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    })

    // console.log(categories);

    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h3>

           {categories.map((category) => {
            return <RestaurantCategory data={category?.card?.card} />
           })} 
        </div>
    )
}