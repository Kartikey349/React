import RestaurentCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

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

const onlineStatus = useOnlineStatus();

if(onlineStatus === false){
    return <h1>Seems like you are Offline!!! Please check your internet connection</h1>
}

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
    <div className="body">

        <div className="search text-center">
            <input id="search-bar" className="border border-solid border-black p-2 rounded-sm" placeholder="search...." type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />

            <button className="search-btn bg-green-600 p-2 ml-2 rounded-sm text-white" onClick={() => {
                const data = filterData(searchText, listOfRestaurant);

                setFilteredRestaurant(data);
            }}>search</button>

        </div>

        <div className="filter text-center my-4">
            <button className="filter-btn border border-solid border-black px-6 rounded-md bg-gray-100" 
            onClick={() => {
              const filteredList = listOfRestaurant.filter((restaurant) =>  restaurant.info.avgRating > 4.2
                );
                setFilteredRestaurant(filteredList);
            }}>
                Top rated Restaurant
            </button>
        </div>

        <div className="res-container flex flex-wrap justify-center">
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