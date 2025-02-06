import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import Shammer from "./Shammer"
import {useState, useEffect} from 'react';

const Body = () =>{
    // const [list,setList]= useState(resList.restaurant);
    const [listOfRes,setlistOfRes]= useState([]);
    const [searchText,setSearchText]= useState("");
    const [listFilterRes,setListFilterRes]= useState("");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.7475282&lng=78.0009992&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const dataOfRes=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(res=>res.info)
        setlistOfRes(dataOfRes);
        setListFilterRes(dataOfRes);
    }

    // if(searchText.length===0){
    //     return <Shammer/>
    // }

    return listOfRes.length===0 ? <Shammer/> : (
        <div className="body">
            <div className="filter-search">
            <div className="search">
                <input type="text" className="input-text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button  className="search-btn" onClick={()=>{
                   const filterRes=listFilterRes.filter(res=>res.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
                   setlistOfRes(filterRes)
                }}>Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filterdList=listOfRes.filter(res=>res.avgRating<=4.1);
                    setlistOfRes(filterdList);
                }}>Top Restaurants</button>
            </div>
        </div>
            <div className="res-container">
                {
                    listOfRes.map((restaurant,index)=><RestaurantCard key={restaurant.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
 };

 export default Body;
