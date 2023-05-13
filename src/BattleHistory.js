import React from "react";
import FullDrawer from "./Components/FullDrawer";
import { Link } from "react-router-dom";
function BattleHistory() {
  return (
    <>
      <FullDrawer
        content={
          <div className="container max-w p-5 flex flex-col bg-white rounded-lg">
            <div className="flex justify-between px-5">
              <p className="font-semibold text-l lg:text-xl">Battle History</p>
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
              <table className="table table-compact w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Fight#</th>
                    <th>Meron</th>
                    <th>Wala</th>
                    <th>Draw</th>
                    <th>Net Pay</th>
                    <th>Admin Com</th>
                    <th>Operator Com</th>
                    <th>Sub Operator Com</th>
                    <th>Master Com</th>
                    <th>Agent Com</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>435</td>
                    <td>₱0</td>
                    <td>₱0</td>
                    <td>₱0</td>
                    <td>₱0</td>
                    <td>₱0</td>
                    <td>₱0</td>
                    <td>₱0</td>
                    <td>₱0</td>
                    <td>₱0</td>
                    <td className="text-red-500">Cancelled</td>
                    <td>
                      <Link
                        to="./view"
                        className="btn btn-md w-full btn-ghost border-0"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>436</td>
                    <td>₱550</td>
                    <td>₱0</td>
                    <td>₱0</td>
                    <td>₱20</td>
                    <td>₱0</td>
                    <td>₱0</td>
                    <td>₱0</td>
                    <td>₱0</td>
                    <td>₱0</td>
                    <td className="text-green-500">Meron</td>
                    <td>
                      <Link
                        to="./view"
                        className="btn btn-md w-full btn-ghost border-0"
                      >
                        View
                      </Link>
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

export default BattleHistory;
