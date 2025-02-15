import UserAbout from "./UserAbout";
import UserAboutClass from "./UserAboutClass"
const About = () =>{
    return (
        <div className="font-bold">
            <h1>About</h1>
            <h4>Here we are developing Food Delivery app using React</h4>
            <UserAbout name={"Dhanunjay"} location={"Kurnool"}/>
            <UserAboutClass name={"Dhanu"} location={"Kurnool"}/>
        </div>
    )
}

export default About;