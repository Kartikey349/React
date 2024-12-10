import { CDN_URL } from "../utils/constants";

// const styleCard = {
//     backgroundColor: "#f0f0f0"
// }

//const RestaurentCard = ({resName, cuisines}) => destructuring
//const {resName, cuisines} = props;
const RestaurentCard = (props) => {
    const {resData} = props;

    const{
        cloudinaryImageId, 
        name, 
        cuisines, 
        avgRating, 
        costForTwo,
        sla,
        slaString
    } = resData.info;

    return(
        <div className="m-4 p-4 w-[250px] shadow-md h-[400px] hover:shadow-2xl">
            <img className="res-logo h-[180px] w-[100%] rounded-md" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-1 mt-2">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>

            <div className="flex justify-between">
            <h4>{sla.slaString}</h4>
            <button className="bg-green-500 text-white rounded-sm px-1 text-xs">{avgRating}⭐</button>
            </div>
        </div>
    )
}

export default RestaurentCard;