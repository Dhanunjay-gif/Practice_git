import React from "react";

class UserAboutClass extends React.Component{
    constructor(props){
        super(props)
    }
    render (){
        const {name, location} = this.props;
        return (
            <div className="user-about">
                <h2>Name: {name}</h2>
                <h3>Location: {location} (ClassBased)</h3>
                <h4>Contact: boyadhanunjay01@gmail.com</h4>
            </div>
        )
    }
};

export default UserAboutClass;
