import {Link} from "react-router"
const RestaurantCard = (props) =>{
    const {resData}=props;
    const {id,imgURL,name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData;
    const fallbackURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={imgURL|| fallbackURL} /> 
            <h3 title={name}>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating} rating</h3>
            <h3>{costForTwo}</h3>
        </div>
    )
};

export default RestaurantCard;