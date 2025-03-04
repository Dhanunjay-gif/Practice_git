import { useState } from "react";
import { useDispatch} from "react-redux";
import { depositeAmount,withdraw,fName ,mobileNum} from "./Action";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [fullName, setFullName] = useState("");
    const [mobile, setMobile] = useState("");
    const dispatch = useDispatch();
    const [transId,setTransId] = useState(0);

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
            <h1 className="text-3xl font-bold mb-4 text-center text-blue-400">Form</h1>
            
            <div className="mb-4 relative">
                <input 
                    className="w-full p-2 border rounded-md" 
                    type="number" 
                    placeholder="Enter Amount" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)}
                />
                <div className="mt-2 flex gap-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" 
                        onClick={() => { dispatch(depositeAmount(amount)); 
                            setTransId(transId+1);
                            dispatch({type:"ADD_Trans",payload:{
                                id:transId,
                                amount:amount,
                                date:new Date(), 
                                type:"Credit"
                            }});
                        setAmount("") }}>
                        Deposit
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md" 
                        onClick={() => { dispatch(withdraw(amount)); 
                            setTransId(transId+1);
                            dispatch({type:"ADD_Trans",payload:{
                                id:transId,
                                amount:amount,
                                date:new Date(),
                                type:"Debit"
                            }});
                        setAmount("") }}>
                        Withdraw
                    </button>
                </div>
            </div>
            
            <div className="mb-4 flex items-center gap-2">
                <input 
                    className="w-full p-2 border rounded-md" 
                    type="text" 
                    placeholder="Enter Your Name" 
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)}
                />
                <button className="bg-green-500 text-white px-4 py-2 rounded-md" 
                    onClick={() => { dispatch(fName(fullName)); setFullName("") }}>
                    Update
                </button>
            </div>

            <div className="mb-4 flex items-center gap-2">
                <input 
                    className="w-full p-2 border rounded-md" 
                    type="number" 
                    placeholder="Enter Your Mobile" 
                    value={mobile} 
                    onChange={(e) => setMobile(e.target.value)}
                />
                <button className="bg-green-500 text-white px-4 py-2 rounded-md" 
                    onClick={() => { dispatch(mobileNum(mobile)); setMobile("") }}>
                    Update
                </button>
            </div>
        </div>
    );
};

export default Form