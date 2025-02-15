const Shammer = () =>{
    return (
        // <div className="shammer-container">
        //     <div className="shammer-card"></div>
        // </div>
        <div className="shimmer-container grid grid-cols-6 gap-4 p-2 py-22 rounded-lg">
          {Array(16).fill("").map((_, index) => (
          <div key={index} className="shimmer-card w-60 h-60 bg-gray-300 border border-gray-400 p-5 rounded-lg"></div>))
          }
        </div>
    )
};

export default Shammer;


