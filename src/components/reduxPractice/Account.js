import { useSelector } from "react-redux";
const Account = () => {
    const data = useSelector((state) => state);
    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center gap-6">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-blue-500 mb-4 text-center">Account Details</h1>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-blue-500 text-white">
                                <th className="border border-gray-300 px-4 py-2 text-left">Balance</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">UserName</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-50 hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2">{data.balance}</td>
                                <td className="border border-gray-300 px-4 py-2">{data.fullName}</td>
                                <td className="border border-gray-300 px-4 py-2">{data.mobile}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Account;
