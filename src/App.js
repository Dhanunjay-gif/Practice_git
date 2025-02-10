import React from "react";
import ReactDOM from "react-dom/client";  // react-dom/client
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js"
import { BrowserRouter,Routes,Route} from "react-router";
import { Outlet } from "react-router";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Increment from "./components/Increment.js"

const AppLayout= () =>{
    return(
        <div className="app">
        <Header/>
        <Outlet/>
        </div>
    )
}

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/About",
        element:<About/>,
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
      }
    ],
    errorElement:<Error/>,
  },
])

// const AppRouter = () =>{
//     return(<BrowserRouter>
//         <Routes>
//           <Route path="/" element={<AppLayout />} />
//           <Route path="/About" element={<About/>}/>
//           <Route path="/Contact" element={<Contact/>}/>
//           <Route path="/*" element={<Error/>}/>
//         </Routes>
//       </BrowserRouter>
//     );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);
