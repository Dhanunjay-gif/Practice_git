import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItem } from "../reduxStore/cartSlice";
import ItemList from "./ItemList";
import { clearCart } from "../reduxStore/cartSlice";
import {ItemListCloseButton} from "./ItemList"
const Cart = () =>{
    const cartItems = useSelector(store=>store.cart1.items)
    const dispatch = useDispatch()
    const handleClearItems = () =>{
        dispatch(clearCart());
    }

    const ItemWithClose = ItemListCloseButton(ItemList)
    return (
        <div>
            <div className="text-center p-4 m-4">
                <h3 className="font-bold text-2xl">Cart</h3>
            </div>
            <div className="absolute right-0 top-37 m-10">
                <button className="border border-gray-300 bg-white hover:bg-blue-500 hover:text-white text-black-500 font-bold px-4 py-2 rounded-lg shadow-md transition duration-200 ease-in-out w-27 cursor-pointer"
                onClick={handleClearItems}
                >Clear Cart</button>
            </div>
            { cartItems.length ||
             (<div className="flex items-center justify-center h-8/12">
                <h3 className="text-2xl font-bold text-red-500">Please Add Items In Cart</h3>
            </div>)
            }

            <div>
                <div>
                    <button>Close</button>
                </div>
                <ItemWithClose items={cartItems}/>
            </div>
            <div>
                {/* <h3>Total</h3> */}
            </div>
        </div>
    )
};


export default Cart;