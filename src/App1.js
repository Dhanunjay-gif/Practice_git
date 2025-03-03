import React from "react";
import ReactDOM from "react-dom/client"; 
import AccountReducer from "./components/reduxPractice/ReduxPractice"
import ReduxApp from './components/reduxPractice/ReduxApp'
import { Provider } from "react-redux";
import { store } from "./components/reduxPractice/ReduxPractice";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <ReduxApp/>
    </Provider>
);
