import { combineReducers, createStore } from "redux"; // Corrected import

const initialState = {
  balance: 0,
  fullName: "",
  mobile: null,
};

const todoInitialState={
  todos:[{id:1,title:"goto movie"}],  //{id:2,title:title}
  nextId:1
}

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
};

const TodosReducer = (state=todoInitialState,action) =>{
  switch(action.type){
    case "ADD_TODO":
      const newTodo = {id:state.todos.nextId,title:action.payload.title}
      return {...state,todos:[...state.todos,newTodo],nextId:state.nextId+1}
    case "EDIT_TODO":
      return {...state,todos:state.todos.map(todo=>todo.id==action.payload.id ? {...todo,title:action.payload.title} : todo)}
    case "DELETE_TODO":
      return {...state,todos:state.todos.filter((todo)=>todo.id!==action.payload.id)}
    default:
      return state
  }
}

const rootReducer = combineReducers(
  {
    account:AccountReducer,
    transaction:TranscationReducer ,
    todosReducer:TodosReducer
  }
)

export const store = createStore(rootReducer);

// console.log(store.getState()); // Initial State


export default rootReducer;
