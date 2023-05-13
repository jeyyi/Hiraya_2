import React from "react";
import FullDrawer from "./Components/FullDrawer";
function CashIn() {
  return (
    <>
      <FullDrawer
        content={
          <div className="container max-w p-5 flex flex-col bg-white rounded-lg">
            <div className="flex justify-between px-5">
              <p className="font-semibold text-l lg:text-xl">Cash In Request</p>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between px-5 py-2 gap-2">
              <div className="flex flex-col justify-start w-full gap-2 lg:flex-row">
                <input
                  type="text"
                  placeholder="Search(Name).."
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <button className="btn h-full max-w-sm bg-blue-500 border-0">
                Apply Filter
              </button>
            </div>
            <div className="overflow-x-auto py-5">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Amount</th>
                    <th>Agent Username</th>
                    <th>Status</th>
                    <th>Action 1</th>
                    <th>Action 2</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>jaja123</td>
                    <td>₱0</td>
                    <td>agent123</td>
                    <td className="text-yellow-500">Pending</td>
                    <td>
                     <button className="btn bg-red-500 border-0">Decline</button>
                    </td>
                    <td>
                      <button className="btn bg-green-500 border-0">Accept</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        }
      />
    </>
  );
}

export default CashIn;
