import { useState } from "react";

const Increment = ({ count, setCount }) => {
    return (
        <div className="count-inc-dec">
            {count === 0 ? (
                <button className="add-btn-initial" onClick={() => setCount(1)}>Add</button>
            ) : (
                <div className="inc-dec">
                    <button className="decrease-btn" onClick={() => setCount(count - 1)}>-</button>
                    <span>{count}</span>
                    <button className="increment-btn" onClick={() => setCount(count + 1)}>+</button>
                </div>
            )}
        </div>
    );
};

export default Increment;
