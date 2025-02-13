import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import Shammer from "./Shammer"
import {RESTAURANT_URL} from "../utils/constants";
import {useState, useEffect} from 'react';
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{
    // const [list,setList]= useState(resList.restaurant);
    const [listOfRes,setlistOfRes]= useState([]);
    const [searchText,setSearchText]= useState("");
    const [listFilterRes,setListFilterRes]= useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch(RESTAURANT_URL);
        const json = await data?.json();
        const dataOfRes=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(res=>res.info)
        setlistOfRes(dataOfRes);
        setListFilterRes(dataOfRes);
    }

    const onlineStatus = useOnlineStatus();
    if (!onlineStatus) {
        return <h1>Looks like you're offline! Please check your internet connection.</h1>;
    }

    if(listOfRes.length===0){
        return <Shammer/>
    }

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
            <div className='listofRestaurants-count'>
                <h3>Restaurants :{listOfRes.length}</h3>
            </div>
        </div>
            <div className="res-container">
                {
                    listOfRes.map((restaurant,index)=> (<Link to={"/restaurants/"+restaurant.id} key={restaurant.id} className="restaurant-cards-link"><RestaurantCard resData={restaurant}/></Link>))
                }
            </div>
        </div>
    )
 };

 export default Body;
