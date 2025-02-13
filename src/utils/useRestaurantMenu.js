import { MENU_URL } from "./constants";
import {useState, useEffect} from "react";

const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        try {
            const data = await fetch(MENU_URL+resId);
            const json = await data?.json();
            setResInfo(json?.data);
        }
        catch (error){
            console.error("Error fetching menu:", error);
        }
    };

    return resInfo;
}

export default useRestaurantMenu;