import { useState, useEffect } from "react";
import Shammer from "./Shammer";
import Increment from "./Increment";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [count, setCount] = useState({});

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.7475282&lng=78.0009992&restaurantId=183321&catalog_qa=undefined&submitAction=ENTER");
            const json = await data.json();
            setResInfo(json?.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    const handleIndividualCount = (id,newCount) =>{
        setCount(prevCount=>({
            ...prevCount,
            [id] : newCount
        }))
    }

    if (resInfo === null) {
        return <Shammer />;
    }

    const resInfoURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
    const { name: resName, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    return (
        <div className="menu">
            <h3>{resName}</h3>
            <h3>{cuisines.join(",")} - {costForTwoMessage}</h3>
            <h3>Menu</h3>
            <ul className="menu-container">
                {itemCards.map((res) => {
                    const { name: itemName, price, description, imageId, ratings,id } = res.card.info;
                    const count = count[id] || 0; // Default count is 0 if not present

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
                            <div className="res-logo">
                                <img className="resinfo-logo" src={resInfoURL + imageId} alt="Restaurant Logo" />
                                <div className="add-items">
                                    <Increment count={count} setCount={(newCount) =>handleIndividualCount(id,newCount)} />
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
