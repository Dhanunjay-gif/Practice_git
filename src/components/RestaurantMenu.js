import { useState, useEffect} from "react";
import Shammer from "./Shammer";
import Increment from "./Increment";
import {useParams} from "react-router";
import {RESINFO_URL} from "../utils/constants";
import {MENU_URL} from "../utils/constants"
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const [counts, setCounts] = useState({}); 

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shammer />;
    }

    // const RESINFO_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
    const { name: resName, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    // Function to update count for a specific item
    const handleCountChange = (id, newCount) => {
        setCounts(prevCounts => {
            console.log("Previous Counts:", prevCounts); 
            return { 
                ...prevCounts, 
                [id]: newCount
            };
        });
    };
    

    return (
        <div className="menu">
            <h2 className="restaurantname-text">{resName}</h2>
            {/* <h3>{cuisines.join(",")} - {costForTwoMessage}</h3> */}
            <h3>Menu</h3>
            <ul className="menu-container">
            <h3 className="recommended-items">Recommended ({itemCards.length})</h3>
                {itemCards.map((res) => {
                    const { name: itemName, price, description, imageId, ratings, id } = res.card.info;
                    const count = counts[id] || 0; // Default count is 0 if not present
                    return (
                        <li key={id} className="menu-items">
                            <div className="menu-items-container">
                                <h4>{itemName}</h4>
                                <h4 className="price">
                                    ₹ {count === 0 ? price / 100 : (price / 100) * count}
                                </h4>
                                <p className="rating-star">
                                    <span className="star">💛</span>
                                    <span className="rating">{ratings?.aggregatedRating?.rating} </span>
                                    <span className="rating-count">({ratings?.aggregatedRating?.ratingCountV2})</span>
                                </p>
                                <div className="res-container-description">
                                    <h5 className="description">{description}</h5>
                                </div>
                            </div>
                            <div className="res-logo-items">
                                <img className="resinfo-logo" src={RESINFO_URL +imageId} alt="Restaurant Logo" />
                                <div className="add-items">
                                    <Increment count={count} setCount={(newCount) => handleCountChange(id, newCount)} />
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
