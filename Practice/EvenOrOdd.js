function evenOdd(arr){
  const even =[]
  const odd= []
  for(let i of arr){
    if(i%2===0){
        even.push(i)
    }
    else{
        odd.push(i)
    }
  }

  return {even, odd}

}
 const arr =[1,2,3,4,5,6,7,8]
console.log(evenOdd(arr))