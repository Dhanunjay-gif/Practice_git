import { combineReducers, createStore } from "redux"; // Corrected import

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

function TranscationReducer(state=[],action){
  switch(action.type){
    case "ADD_Trans" :
      return [...state,{
        id:action.payload.id,
        amount:action.payload.amount,
        type:action.payload.type,
        date:action.payload.date
      }]
    default:
      return state
  }
}

const rootReducer = combineReducers(
  {
    account:AccountReducer,
    transaction:TranscationReducer
  }
)

export const store = createStore(rootReducer);

// console.log(store.getState()); // Initial State


export default rootReducer;
