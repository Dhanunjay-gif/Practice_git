import {useSelector} from "react-redux"
import Todo from "./Todo";
const TodoList = () =>{
    const todos = useSelector(state=>state.todosReducer.todos)
    return (
        <>
        <div>
                {
                todos.map((todo,index)=>(
                    <div className="flex m-2 bg-gray-100 p-5 rounded-lg shadow-lg w-2/4 mx-auto">
                        <Todo key={index} id={todo.id} title={todo.title}/>
                    </div>
                ))}
        </div>
        </>
    )
}

export default TodoList;