import React, {lazy, Suspense, useState} from "react";
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
import Shammer from "./components/Shammer.js";
import { LoginContext } from "./components/UserContext.js"
import { Provider } from "react-redux";
import appStore from "./reduxStore/appStore.js"
import Cart from "./components/Cart.js"
import DigitalClock from "./components/DigitalClock.js";
import CountDown from "./components/CountDown.js";
import AccountReducer from "./components/reduxPractice/ReduxPractice.js"

const AppLayout= () =>{
  const [userName,setUserName] = useState("")
    return(
      <Provider store={appStore}>
        <LoginContext.Provider value={{userName,setUserName}}>
        <div className="app">
        <Header/>
        <Outlet/>
        </div>
        </LoginContext.Provider>
      </Provider>
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
      }, 
      {
        path:"/restaurants/cart",
        element:<Cart/>
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

// root.render(<AccountReducer/>);
