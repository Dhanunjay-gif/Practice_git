import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
// import resList from "../utils/mockData";
import Shammer from "./Shammer"
import {RESTAURANT_URL} from "../utils/constants";
import {useState, useEffect, useContext} from 'react';
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import {parentData_Id} from "../utils/mockData";
import { LoginContext } from "./UserContext";

const Body = () =>{
    // const [list,setList]= useState(resList.restaurant);
    const [listOfRes,setlistOfRes]= useState([]);
    const [searchText,setSearchText]= useState("");
    const [listFilterRes,setListFilterRes]= useState([]);

    const {userName,setUserName} = useContext(LoginContext)

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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
        <div id="body" className="body">
            <div className="filter-search">
            <div className="search flex items-center space-x-4 m-4">
                <input type="text" placeholder="search" className="input-text border-2 ml-2" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button  className="search-btn bg-gray-300 text-black border-1 w-25 cursor-pointer hover:bg-gray-200" onClick={()=>{
                   const filterRes=listFilterRes.filter(res=>res.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
                   setlistOfRes(filterRes)
                }}>Search</button>
                <button type="button" id="filter-btn" className="bg-gray-300 text-black border-1 w-37 cursor-pointer hover:bg-gray-200" onClick={()=>{
                    const filterdList=listOfRes.filter(res=>res.avgRating>=4.5);
                    setlistOfRes(filterdList);
                }}>Top Restaurants</button>
                <div>
                    <label className="px-2">UserName</label>
                    <input type="text" className="border-2 " onChange={(e)=>setUserName(e.target.value)} value={userName}/>
                </div>
            </div>
            <div className="listofRestaurants-count text-right w-full pr-4">
                <h3 className="text-lg font-semibold">Restaurants: {listOfRes.length}</h3>
            </div>
        </div>
            <div id="res-container" className="grid grid-cols-6 gap-4 p-2">
                {
                    listOfRes.map((restaurant,index)=> (<Link to={"/restaurants/"+restaurant.id} key={restaurant.id} className="restaurant-cards-link">
                        {parentData_Id.includes(restaurant.parentId) ? (<RestaurantCardPromoted resData={restaurant}/>) : (<RestaurantCard resData={restaurant}/>)}
                        </Link>))
                }
            </div>
        </div>
    )
 };

 export default Body;
