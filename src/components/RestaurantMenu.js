import { useState } from "react";
import Shammer from "./Shammer";
import Increment from "./Increment";
import { useParams } from "react-router";
import { RESINFO_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const [counts, setCounts] = useState({});
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shammer />;
    }

    const { name: resName, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const ListOfCards =resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    const category = ListOfCards.filter(c=>c.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

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
                {/* <h3 className="m-4 font-bold text-xl text-left">Menu</h3> */}
                
                       {
                        category.map(res=>{
                            return (
                                <h3 id="recommended-items" className="font-bold text-lg m-10 text-left">
                                    {res.card.card.title} ({res.card.card.itemCards.length})
                                </h3>
                            )
                        })
                       }

                {itemCards.map((res) => {
                    const { name: itemName, price, description, imageId, ratings, id } = res.card.info;
                    const count = counts[id] || 0;

                    return (
                        <li key={id} className="menu-items container m-10 flex justify-between items-center border-b pb-4">
                            {/* Left Content: Item Name, Price, Rating, Description */}
                            <div className="w-2/3 text-left">
                                <h4 className="font-semibold text-lg">{itemName}</h4>
                                <h4 className="text-gray-700 font-medium">
                                    ₹ {count === 0 ? price / 100 : (price / 100) * count}
                                </h4>
                                <p className="rating-star flex items-center text-yellow-500 text-sm">
                                    { ratings?.aggregatedRating?.rating && (
                                        <>
                                        <svg className={`w-4 h-4 ${ratings?.aggregatedRating?.rating<3.5 ? "fill-[#E6A408]" : ratings?.aggregatedRating?.rating<4.5 ? "fill-[#1BA672]" : "fill-[#116649]" 
                                        }`} viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14 2 9.27l6.91-1.01z"/>
                                      </svg>
                                      <span className={`ml-1 ${ratings?.aggregatedRating?.rating<3.5 ? "text-[#E6A408]" : ratings?.aggregatedRating?.rating<4.5 ? "text-[#1BA672]" : "text-[#116649]" 
                                        }`}>{ratings?.aggregatedRating?.rating}</span>
                                        </>
                                    )
                                    }
                                    {/* <span className="text-lg">⭐</span> */}
                                    {/* <span className={`ml-1 ${ratings?.aggregatedRating?.rating<3.5 ? "fill-[#E6A408]" : ratings?.aggregatedRating?.rating<4.5 ? "fill-[#1BA672]" : "fill-[#116649]" 
                                        }`}>{ratings?.aggregatedRating?.rating}</span> */}
                                    <span className="ml-1 text-gray-500">({ratings?.aggregatedRating?.ratingCountV2})</span>
                                </p>
                                <p className="text-gray-500 text-sm mt-1">{description}</p>
                            </div>

                            {/* Right Content: Image & Add Button */}
                            <div className="w-1/3 flex flex-col items-center">
                                <img 
                                    className="w-32 h-32 object-cover rounded-lg shadow-md" 
                                    src={RESINFO_URL + imageId} 
                                    alt="Food Item" 
                                />
                                <div className="mt-2">
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
