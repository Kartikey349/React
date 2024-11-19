import RestaurentCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

function filterData(searchText, listOfRestaurant){
    const filterData = listOfRestaurant.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
);
    return filterData;
 }

const Body = () => {
    const [searchText, setSearchText] = useState("")
    const [listOfRestaurant, setListOfRestaurant] = useState([]); 

useEffect(() => {
    fetchApi();
    }, []);


async function fetchApi(){
    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=23.2381903&lng=77.43218759999999&carousel=true&third_party_vendor=1");

    const json =  await data.json();

    console.log(json)
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 }
     
//conditional rendering
//  if(listOfRestaurant.length === 0){
//     return <Shimmer />;
//  }

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
    <div className="body">

        <div className="search">
            <input id="search-bar" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />

            <button className="search-btn" onClick={() => {
                const data = filterData(searchText, listOfRestaurant);

                setListOfRestaurant(data);
            }}>search</button>

        </div>

        <div className="filter">
            <button className="filter-btn" 
            onClick={() => {
              const filteredList = listOfRestaurant.filter((restaurant) =>  restaurant.info.avgRating > 4.2
                );
                setListOfRestaurant(filteredList);
            }}>
                top rated restaurant
            </button>
        </div>

        <div className="res-container">
           {
            listOfRestaurant.map((restaurant) => (
                <RestaurentCard key={restaurant.info.id}  resData={restaurant} />))
           }
        </div>
    </div>)
}

export default Body;