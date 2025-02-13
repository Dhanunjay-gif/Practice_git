import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";  // react-dom/client
import Header from "./components/Header.js";
import Body from "./components/Body.js";
// import About from "./components/About.js";
import Contact from "./components/Contact.js"
import { BrowserRouter,Routes,Route} from "react-router";
import { Outlet } from "react-router";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Increment from "./components/Increment.js";
// import Grocery from "./components/Grocery.js";

const AppLayout= () =>{
    return(
        <div className="app">
        <Header/>
        <Outlet/>
        </div>
    )
}

const Grocery = lazy(()=>import("./components/Grocery.js"));

const About = lazy(()=>import("./components/About.js"));

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
        element:<Suspense fallback={<h1>Loading......</h1>}><About/></Suspense>,
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path:"/restaurants/grocery",
        element: <Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>
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
