import React from "react";
import ReactDOM from "react-dom/client";  // react-dom/client
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js"
import { BrowserRouter,Routes,Route} from "react-router";
import Error from "./components/Error.js";

const AppLayout= () =>{
    return(
        <div className="app">
        <Header/>
        <Body/>
        </div>
    )
}

const AppRouter = () =>{
    return(<BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRouter/>);