import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from 'react';

const Body = () =>{
    const [list,setList]= useState(resList.restaurant);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filterdList=list.filter(res=>res.rating>4);
                    console.log(filterdList)
                    setList(filterdList);
                }}>Top Restaurant</button>
            </div>
            <div className="res-container">
                {
                    list.map((restaurant,index)=><RestaurantCard key={index} resData={restaurant}/>)
                }
            </div>
        </div>
    )
 };

 export default Body;