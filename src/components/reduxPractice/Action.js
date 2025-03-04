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