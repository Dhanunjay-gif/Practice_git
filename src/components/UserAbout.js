const UserAbout = ({name,location}) =>{
    return (
        <div className="user-about mt-10 border-2 font-medium">
            <h2 className="m-2">Name: {name}</h2>
            <h3 className="m-2">Location: {location}</h3>
            <h4 className="m-2">Contact: boyadhanunjay01@gmail.com</h4>
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