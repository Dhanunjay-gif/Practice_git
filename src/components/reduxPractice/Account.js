import { useSelector } from "react-redux";
import HandlingRedux from "./HandlingRedux";

const Account = () => {
    const data = useSelector((state) => state);

    return (
        <>
            <div className="p-6 bg-white min-h-screen flex flex-col items-center gap-6">
                {/* Account Details Section */}
                <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-blue-500 mb-4 text-center">
                        Account Details
                    </h1>
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
                                    <td className="border border-gray-300 px-4 py-2">
                                        {data.account?.balance}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {data.account?.fullName}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {data.account?.mobile}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Transaction Details Section */}
                <div className="w-full max-w-md p-6 rounded-lg">
                    <h1 className="text-2xl font-bold text-blue-500 mb-4 text-center">
                        Transaction Details
                    </h1>
                    <div>
                        <table className="w-full">
                            <thead>
                                <tr className=" text-black">
                                    <th className="border border-gray-300 px-4 py-2 ">Id</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                                    <th className="border border-gray-300 px-1 py-2 truncate">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.transaction.map((trans, index) => {
                                        return (
                                            <tr key={trans.id || index} className="bg-gray-50 hover:bg-gray-100">
                                                <td className="border border-gray-300 px-4 py-2">{trans.id}</td>
                                                <td className="border border-gray-300 px-4 py-2">{trans.amount}</td>
                                                <td className="border border-gray-300 px-4 py-2">{trans.type}</td>
                                                <td className="border border-gray-300 px-1 py-2 truncate">{trans.date.toString()}</td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Account;
