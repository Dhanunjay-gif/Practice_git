import { Link } from "react-router";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { id, imgURL, name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData;
    const fallbackURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId;

    return (
        <div 
            id="res-card" 
            className="relative w-60 h-auto border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-white" >
            <img 
                className="w-full h-40 object-cover" 
                alt="Restaurant Logo" 
                src={imgURL || fallbackURL} 
            />
            <div className="p-2">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
                <p className="text-sm text-gray-500 truncate">{cuisines.join(", ")}</p>
                <p className="text-sm text-gray-700 font-medium">{avgRating} ⭐ Rating</p>
                <p className="text-sm text-gray-700">{costForTwo}</p>
            </div>
        </div>
    );
};


// Higher Order Component 
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative"> {/* Ensure the label stays in position */}
                <div className="absolute bg-black text-white p-1 text-xs rounded-lg z-10">
                    Promoted
                </div>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
