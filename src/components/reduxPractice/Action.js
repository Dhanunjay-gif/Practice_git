export const depositeAmount = (amount) =>{
    return ({ type: "deposit", payload: amount })
}

export const withdraw = (amount) =>{
    return ({ type:"withdraw" , payload:amount })
}

export const fName = (fname) =>{
    return { type:"fullName" , payload:fname}
}

export const mobileNum = (mobile) =>{
    return {type:"mobile", payload:mobile}
}

// TODO_List

export const addTodo = (todo) =>{
    return {type:"ADD_TODO",payload:todo}
}

export const editTodo = (todo) =>{
    return {type:"EDIT_TODO",payload:todo}
}

export const deleteTodo = (id) =>{
    return {type:"DELETE_TODO",payload:id}
}