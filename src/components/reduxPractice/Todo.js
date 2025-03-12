import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "./Action";

const Todo = ({ id, title }) => {
    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title); 
    const dispatch=useDispatch()
    const handleTodo = () =>{
        if(newTitle.trim()){
            dispatch(editTodo({id:id,title:newTitle}))
            setEditing(false)
        }
    }

    const handleDelete = () =>{
        dispatch(deleteTodo({id:id}))
    }

    return (
        <div className="w-full">
            {editing ? (
                <div className="flex justify-between items-center w-full p-2">
                    <input
                        type="text"
                        className="border-2 px-2 py-1 flex-grow rounded-md"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <button className="px-3 py-1 bg-green-500 text-white rounded ml-2" onClick={()=>handleTodo()}>Save</button>
                </div>
            ) : (
                <li className="flex justify-between items-center w-full border-b p-2">
                    <p className="text-left flex-grow">{title}</p>
                    <div className="flex space-x-2">
                        <button
                            className="px-2 py-1 bg-blue-500 text-white rounded"
                            onClick={() => setEditing(true)}
                        >
                            Edit
                        </button>
                        <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={()=>handleDelete()}>Delete</button>
                    </div>
                </li>
            )}
        </div>
    );
};

export default Todo;
