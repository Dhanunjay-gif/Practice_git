import React from "react";

class UserAboutClass extends React.Component{
    constructor(props){
        super(props)
    }
    render (){
        const {name, location} = this.props;
        return (
            <div id="user-about" className="mt-10 border-2 font-medium">
                <h2 className="m-2">Name: {name}</h2>
                <h3 className="m-2">Location: {location} (ClassBased)</h3>
                <h4 className="m-2">Contact: boyadhanunjay01@gmail.com</h4>
            </div>
        )
    }
};

export default UserAboutClass;
