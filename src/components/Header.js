import { useState, useContext } from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from 'react-router';
import useOnlineStatus from "../utils/useOnlineStatus";
import { LoginContext } from "./UserContext";
import { useSelector } from "react-redux";


const Header = () =>{
    const [btnNameReact,setBtnNameReact]= useState("Login");
    const onlineStatus = useOnlineStatus();
    const {userName,setUserName} = useContext(LoginContext)

    // Subscribing to the store using a Selector
    const cartItems = useSelector(store=>store.cart1.items)

    return(
        <div className="flex justify-between border-2 m-2" alt="header">
            <div className="logo-container" style={{alignContent:"center"}}>
                <img className="w-26" alt="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul className="flex items-center p-4 m-4 space-x-4">
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="hover:text-blue-700"><Link to="/">Home</Link></li>
                    <li className="hover:text-blue-700"><Link to="/About">About</Link></li>
                    <li className="hover:text-blue-700"><Link to="/Contact">Contact</Link></li>
                    <li className="hover:text-blue-700"><Link to="restaurants/grocery">Grocery</Link></li>
                    <li className="hover:text-blue-700"><Link to="restaurants/cart">🛒{cartItems.length>0 && `(${cartItems.length})`}</Link></li>
                    <li className="hover:text-blue-700 font-extrabold">{userName}</li>  
                    <button type="button" className='bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center' onClick={()=>btnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;