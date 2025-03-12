import { useState } from "react";
import Shammer from "./Shammer";
import Increment from "./Increment";
import { useParams } from "react-router";
import { RESINFO_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Restaurantcategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const [counts, setCounts] = useState({});
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shammer />;
    }

    const { name: resName, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const ListOfCards =resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    // const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    const category = ListOfCards.filter(c=>c.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // Function to update count for a specific item
    const handleCountChange = (id, newCount) => {
        setCounts(prevCounts => {
            // console.log("Previous Counts:", prevCounts);
            return { 
                ...prevCounts, 
                [id]: newCount 
            };
        });
    };
    

    return (
        <div className="menu max-w-5xl mx-auto p-6">
            <h2 className="m-4 font-extrabold text-2xl text-left">{resName}</h2>
            <ul className="m-10">
                <h3 className="m-4 font-bold text-xl text-left">Menu</h3>
            </ul>
            <div>
                {
                    category.map((res,index)=>{
                        return (
                            <Restaurantcategory key={index} data={res?.card?.card}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default RestaurantMenu;
