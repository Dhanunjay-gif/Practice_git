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
                <ul className="listofheader">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li className="cart">Cart</li>
                    <button type="button" className='login' onClick={()=>btnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;