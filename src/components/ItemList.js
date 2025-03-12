import { useDispatch, useSelector } from "react-redux";
import { RESINFO_URL } from "../utils/constants";
import { addItems, removeItem } from "../reduxStore/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cart1.items);

    const handleAddItems = (item) => {
        dispatch(addItems(item));
    };

    const handleRemoveItems = (itemId) => {
        dispatch(removeItem(itemId));
    };

    return (
        <div className="max-w-3xl mx-auto mt-6">
            {items.map(item => {
                const { name: itemName, price, description, imageId, ratings, id, defaultPrice } = item.card.info;

                const isInCart = cartItems.some(cartItem => cartItem.card.info.id === id);

                return (
                    <div key={id} className="flex justify-between items-center bg-white p-4 mb-4 relative border-b-1 border-gray-300">
                        {/* Left Side - Item Info */}
                        <div className="w-2/3">
                            <span className="text-lg font-semibold text-gray-800">{itemName}</span> <br/>
                            <span className="text-md font-medium text-gray-600 mt-1">₹ {price ? (price / 100) : (defaultPrice/100)}</span>
                            
                            {/* Rating Section */}
                            <p className="flex items-center text-sm mt-2">
                                {ratings?.aggregatedRating?.rating && (
                                    <>
                                        <svg 
                                            className={`w-4 h-4 ${ratings?.aggregatedRating?.rating < 3.5 
                                                    ? "fill-[#E6A408]" 
                                                    : ratings?.aggregatedRating?.rating < 4.5 
                                                    ? "fill-[#1BA672]" 
                                                    : "fill-[#116649]"
                                                }`}
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14 2 9.27l6.91-1.01z"/>
                                        </svg>
                                        <span className={`ml-1 font-medium ${ratings?.aggregatedRating?.rating < 3.5 
                                                ? "text-[#E6A408]" 
                                                : ratings?.aggregatedRating?.rating < 4.5 
                                                ? "text-[#1BA672]" 
                                                : "text-[#116649]"
                                            }`}>
                                            {ratings?.aggregatedRating?.rating}
                                        </span>
                                    </>
                                )}
                                <span className="ml-2 text-gray-500 text-xs">
                                    ({ratings?.aggregatedRating?.ratingCountV2})
                                </span>
                            </p>

                            {/* Description */}
                            <p className="text-gray-500 text-sm mt-2">{description}</p>
                        </div>

                        {/* Right Side - Image & Button */}
                        <div>
                            <img 
                                className="w-36 h-36 object-cover rounded-lg" 
                                src={RESINFO_URL + imageId} 
                                alt="fooditems" 
                            />
                            <div className="mt-2 flex justify-center">
                                {isInCart ? (
                                    <button 
                                        className="border border-gray-300 bg-red-500 text-white font-bold px-4 py-2 rounded-lg shadow-md transition duration-200 ease-in-out w-6/12 cursor-pointer" 
                                        onClick={() => handleRemoveItems(id)}
                                    >
                                        REMOVE
                                    </button>
                                ) : (
                                    <button 
                                        className="border border-gray-300 bg-white hover:bg-green-500 hover:text-white text-green-500 font-bold px-4 py-2 rounded-lg shadow-md transition duration-200 ease-in-out w-6/12 cursor-pointer" 
                                        onClick={() => handleAddItems(item)}
                                    >
                                        ADD
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export const ItemListCloseButton = (List) =>{
    return (props) =>{
        return (
            <div>
                <div>
                    <span>Close123</span>
                    <List {...props}/>
                </div>
            </div>
        )
    }
}

export default ItemList;
