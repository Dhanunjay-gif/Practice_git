const UserAbout = ({name,location}) =>{
    return (
        <div className="user-about">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: boyadhanunjay01@gmail.com</h4>
        </div>
    )
};

export default UserAbout;

// const UserAbout = (props) =>{
//     return (
//         <div className="user-about">
//             <h2>Name: {props.name}</h2>
//             <h3>Location: {props.location}</h3>
//             <h4>Contact: boyadhanunjay01@gmail.com</h4>
//         </div>
//     )
// };

// export default UserAbout;