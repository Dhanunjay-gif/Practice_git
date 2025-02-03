
const RestaurantCard = (props) =>{
    const {resData}=props;
    const {imgURL,name,cuisens,rating,cost} = resData;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={imgURL}/>
            <h3 title={name}>{name}</h3>
            <h3>{cuisens}</h3>
            <h3>{rating} rating</h3>
            <h3>₹{cost}</h3>
        </div>
    )
};

export default RestaurantCard;