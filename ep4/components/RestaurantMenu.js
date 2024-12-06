import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

export const RestaurantMenu = () => {
    
    const { resId } = useParams();

   const resInfo = useRestaurantMenu(resId);

    
    if(resInfo === null) return <Shimmer />;


    const {name,
        cuisines,
        costForTwoMessage,
    } = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;


    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>

         <h2>Menu</h2>
            <ul> 
                {itemCards.map((item)=> {
                    return <li key={item.card.info.id}>{item.card.info.name} - Rs {(item.card.info.price || item.card.info.defaultPrice) /100}</li>
                })}
            </ul>
        </div>
    )
}