import RestaurentCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

 

const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState(resList); 

    return(<div className="body">
        <div className="filter">
            <button className="filter-btn" 
            onClick={() => {
              const filteredList = listOfRestaurant.filter((restaurant) =>  restaurant.data.avgRating > 4
                );
                setListOfRestaurant(filteredList);
            }}>
                top rated restaurant
            </button>
        </div>

        <div className="res-container">
           {
            listOfRestaurant.map((restaurant) => (<RestaurentCard key={restaurant.data.id} resData = {restaurant} /> ))
           }
        </div>
    </div>)
}

export default Body;