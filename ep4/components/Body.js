import RestaurentCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, listOfRestaurant){
    const filterData = listOfRestaurant.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
);
    return filterData;
 }

const Body = () => {
    const [searchText, setSearchText] = useState("")
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [listOfRestaurant, setListOfRestaurant] = useState([]); 

useEffect(() => {
    fetchApi();
    }, []);


async function fetchApi(){
    const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=23.259933&lng=77.412613&page_type=DESKTOP_WEB_LISTING");

    const json =  await data.json();
    
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 }
     
//conditional rendering
//  if(listOfRestaurant.length === 0){
//     return <Shimmer />;
//  }

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
    <div className="body">

        <div className="search">
            <input id="search-bar" placeholder="search...." type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />

            <button className="search-btn" onClick={() => {
                const data = filterData(searchText, listOfRestaurant);

                setFilteredRestaurant(data);
            }}>search</button>

        </div>

        <div className="filter">
            <button className="filter-btn" 
            onClick={() => {
              const filteredList = listOfRestaurant.filter((restaurant) =>  restaurant.info.avgRating > 4.2
                );
                setFilteredRestaurant(filteredList);
            }}>
                top rated restaurant
            </button>
        </div>

        <div className="res-container">
           {
            filteredRestaurant.map((restaurant) => ( 
            <Link key={restaurant.info.id}  
            to={"/restaurant/" + restaurant.info.id}> <RestaurentCard 
                resData={restaurant} /> 
            </Link>))
           }
        </div>
    </div>)
}

export default Body;