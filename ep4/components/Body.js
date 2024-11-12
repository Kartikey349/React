import RestaurentCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

// function filterData(searchText, listOfRestaurant){
//     const filterData = listOfRestaurant.filter((restaurant) => restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
// );
//     return filterData;
//  }

const Body = () => {
    // const [searchText, setSearchText] = useState("")
    const [listOfRestaurant, setListOfRestaurant] = useState([]); 

useEffect(() => {
    fetchApi();
    }, []);


async function fetchApi(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json =  await data.json();

    setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 }
     
//conditional rendering
//  if(listOfRestaurant.length === 0){
//     return <Shimmer />;
//  }

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
    <div className="body">

        {/* <div className="search">
            <input id="search-bar" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />

            <button className="search-btn" onClick={() => {
                const data = filterData(searchText, listOfRestaurant);

                setListOfRestaurant(data);
            }}>search</button>

        </div> */}

        <div className="filter">
            <button className="filter-btn" 
            onClick={() => {
              const filteredList = listOfRestaurant.filter((restaurant) =>  restaurant.info.avgRating > 4.1
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