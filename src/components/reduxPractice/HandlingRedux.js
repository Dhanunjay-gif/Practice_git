import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HandlingRedux = () => {
    const data = useSelector(state => state);
    const dispatch = useDispatch();
    const [mobile, setMobile] = useState("");

    return (
        <>
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md flex flex-col items-center gap-4">
            <h1 className="text-xl text-green-500 font-semibold">{data.mobile}</h1>
            
            <input 
                className="w-full p-2 border rounded-md" 
                placeholder="Mobile Number" 
                value={mobile} 
                onChange={(e) => setMobile(e.target.value)} 
            />
            
            <button 
                className="bg-green-500 text-white px-4 py-2 rounded-md w-full" 
                onClick={() => { dispatch({ type: "mobile", payload: mobile }); setMobile(""); }}
            >
                Update
            </button>
        </div>
        </>
    );
};

export default HandlingRedux