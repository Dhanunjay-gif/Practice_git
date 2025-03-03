const CountDown = () =>{
    let count =5;
    const timer1 = setInterval(()=>{
        console.log(count)
        count--;
        if(count<0){
            clearInterval(timer1);
            console.log("time cleared")
        }
    },1000)
}

export default CountDown