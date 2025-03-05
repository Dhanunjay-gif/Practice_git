import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "./Action"
import TodoList from "./TodoList"
const TodoApp = () =>{
    const dispatch = useDispatch()
    const [todoTitle,setTodoTitle] = useState("")
    const handleTodo = () =>{
        if(todoTitle.trim()){
            const newTodo ={
                title:todoTitle
            }
            dispatch(addTodo(newTodo))
            setTodoTitle("")
        }
    }
    return (
        <>
        <div>
            <h3 className="text-blue-400 flex justify-center items-center text-2xl">Todo App Using Redux</h3>
            <div className="flex justify-center items-center">
                <input className="border-2" type="text" value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)}/>
                <button type="button" className="m-5 w-10 h-6 hover:bg-blue-400 border-2 flex justify-center items-center bg-blue-500 border-gray-400 text-white cursor-pointer"
                 onClick = {()=>handleTodo()}
                >Add</button>
            </div>
            <div>
                <TodoList/>
            </div>
        </div>
        </>
    )
}

export default TodoApp