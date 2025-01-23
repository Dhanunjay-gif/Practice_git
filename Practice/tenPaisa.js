function calculations (num,days){   // first day 10, sec 20 third 40
    for(let i=2;i<=days;i++){
        num=num+num
    }
    let res=num/100
    return res
}

console.log(calculations(10,20))

const calculate = (d)=>{
    let days=d-1
    let res = (10*(Math.pow(2,days)))/100
    return res
}

console.log(calculate(20))