import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from 'react-router';


const Header = () =>{
    const [btnNameReact,setBtnNameReact]= useState("Login");
    return(
        <div className="header">
            <div className="logo-container" style={{alignContent:"center"}}>
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/About"><li>About Us</li></Link>
                    <Link to="/Contact"><li>Contact Us</li></Link>
                    <li className="cart">Cart</li>
                    <button type="button" className='login' onClick={()=>btnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;