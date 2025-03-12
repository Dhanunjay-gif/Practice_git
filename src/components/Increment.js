import { useState } from "react";

const Increment = ({ count, setCount }) => {
    return (
        <div id="count-inc-dec" className="flex items-center">
            {count === 0 ? (
                <button 
                    className="bg-orange-400 text-white px-4 py-2 rounded-2xl font-semibold hover:bg-orange-300 cursor-pointer"
                    onClick={() => setCount(1)}
                >
                    Add
                </button>
            ) : (
                <div className="flex items-center space-x-1 border border-gray-300 px-3 py-1 rounded-2xl">
                    <button 
                        className="text-black font-bold px-2 rounded-md cursor-pointer"
                        onClick={() => setCount(count - 1)}>
                            -
                    </button>
                    <span className="text-lg font-semibold">{count}</span>
                    <button 
                        className="text-black font-bold px-2 rounded-md cursor-pointer"
                        onClick={() => setCount(count + 1)}>
                        +
                    </button>
                </div>
            )}
        </div>
    );
};

export default Increment
