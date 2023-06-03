import React from "react";
import FullDrawer from "./Components/FullDrawer";

function Transaction() {
  return (
    <>
      <FullDrawer
        content={
          <div className="container max-w p-5 flex flex-col bg-white rounded-lg">
            <div className="flex justify-between px-5">
              <p className="font-semibold text-l lg:text-xl">
                Transaction Logs (Cash-in, Cash-out, Commission Wallet Transfer)
              </p>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col lg:flex-row justify-between px-5 py-2 gap-2">
              <div className="flex flex-col justify-start w-full gap-2 lg:flex-row">
                <input
                  type="text"
                  placeholder="Search(Name).."
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="flex gap-1">
                  <select className="select select-bordered w-1/2 lg:w-full max-w-xs">
                    <option disabled selected>
                      Select Status
                    </option>
                    <option>Pending</option>
                    <option>Cancelled</option>
                    <option>Complete</option>
                  </select>
                  <select className="select select-bordered w-1/2 lg:w-full max-w-xs">
                    <option disabled>For</option>
                    <option>Request</option>
                    <option>Direct</option>
                  </select>
                </div>
              </div>

              <button className="btn max-w-sm bg-blue-500 border-0">
                Apply Filter
              </button>
            </div>
            <div className="overflow-x-auto py-5">
              <table className="table table-compact w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>To</th>
                    <th>RequestedBy</th>
                    <th>Amount</th>
                    <th>Available Wallet</th>
                    <th>Remaining Wallet</th>
                    <th>Commission Wallet</th>
                    <th>Agent Current Wallet</th>
                    <th>Agent Available Wallet</th>
                    <th>For</th>
                    <th>Status</th>
                    <th>Date Requested</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>13893</th>
                    <td>Cash-In</td>
                    <td>duglas005</td>
                    <td>burrita</td>
                    <td>₱60</td>
                    <td>₱0.17 </td>
                    <td>₱60.17</td>
                    <td>₱0.89</td>
                    <td>₱60</td>
                    <td>₱0</td>
                    <td>Request</td>
                    <td className="text-green-500">Completed</td>
                    <td>2023-04-04 13:56:43</td>
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

export default Transaction;
