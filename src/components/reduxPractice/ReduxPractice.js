import { createStore } from "redux"; // Corrected import

const initialState = {
  balance: 0,
  fullName: "",
  mobile: null,
};

function AccountReducer(state = initialState, action) {
  switch (action.type) {
    case "deposit": 
      return { ...state, balance: state.balance + +action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - +action.payload };
    case "fullName":
        return {...state,fullName:action.payload}
    case "mobile":
        return {...state,mobile:action.payload}
    default:
      return state;
  }
}

export const store = createStore(AccountReducer);

// console.log(store.getState()); // Initial State

// store.dispatch({ type: "deposit", payload: 1000 });

// store.dispatch({ type: "withdraw", payload: 100 });
// store.dispatch({ type: "fullName", payload: "Dhanu" });
// store.dispatch({ type: "mobile", payload: 7799349242 });

export default AccountReducer;
