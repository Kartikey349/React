import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0"
}

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
        deliveryTime
    } = resData.data;

    return(
        <div className="res-card" style = {styleCard}>
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo / 100}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export default RestaurentCard;