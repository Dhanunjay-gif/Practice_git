import Header from "./Header";

const Contact = () =>{
    const Pnumber = "7799349242";
    const email="dhanunjay.boya01@gmail.com";
    return(
        <div className="contact">
            <Header/>
            <h1>Contact</h1>
            <h3>Number: {Pnumber}</h3>
            <h3>Email: {email}</h3>
            <div className="thanks-msg">
                <h2>Happy Nice Day, Thank You</h2>
            </div>
        </div>
    )
}

export default Contact;