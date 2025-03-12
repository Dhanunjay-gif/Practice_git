import ItemList from "./ItemList";
import {useState} from "react";
const Restaurantcategory = ({data}) =>{
     
    const [showItems, setShowItems] = useState(true);
     
    const handleClick = () =>{
        setShowItems(!showItems);
    }
    return (
        <div>
        <div className="w-10/12 mx-auto my-4 p-4  shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span id="recommended-items" className="font-bold text-lg">
                    {data.title} ({data.itemCards.length})
                </span>
                  { showItems ? <span>⬆️</span> : <span>⬇️</span> }
            </div>
            <div>{
                showItems && <ItemList items={data.itemCards}/>
            }
            </div>
        </div>
        </div>
    )
}

export default Restaurantcategory;