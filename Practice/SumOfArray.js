function sumArray (...arr){
    let sum=0
    for(let i of arr){
        sum+=i
    }
    return sum
}

console.log(sumArray(10,20,30,40))
