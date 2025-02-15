import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from 'react-router';
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () =>{
    const [btnNameReact,setBtnNameReact]= useState("Login");
    const onlineStatus = useOnlineStatus();
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
                    <li className="hover:text-blue-700">Cart</li>
                    <button type="button" className='bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center' onClick={()=>btnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;