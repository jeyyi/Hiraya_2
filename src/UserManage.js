import React from "react";
import { Link } from "react-router-dom";
import FullDrawer from "./Components/FullDrawer";

const UserManage = () => {
  return (
    <>
      <FullDrawer
        content={
          <div className="container max-w p-5 flex flex-col bg-white rounded-lg">
            <div className="flex justify-between px-5">
              <p className="font-semibold text-l lg:text-xl">Manage User</p>
              <Link to="./create" className="btn btn-sm btn-gray-500">Create User</Link>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between px-5 py-2 gap-2">
              <div className="flex flex-col justify-start w-full gap-2 lg:flex-row">
                <input
                  type="text"
                  placeholder="Search(Name).."
                  className="input input-bordered w-full max-w-xs"
                />
                <select
                  className="select select-bordered w-full max-w-xs"
                  defaultValue="Select Role"
                >
                  <option disabled>Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="player">Player</option>
                  <option value="game master">Game Master</option>
                  <option value="operator">Operator</option>
                  <option value="sub operator">Sub Operator</option>
                  <option value="master agent">Master Agent</option>
                  <option value="agent">Agent</option>
                </select>
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
                    <th>Username</th>
                    <th>Sponsor</th>
                    <th>Role</th>
                    <th>Wallet</th>
                    <th>Action 1</th>
                    <th>Action 2</th>
                    <th>Action 3</th>
                    <th>Action 4</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>John Doe</th>
                    <td>Cy Ganderton</td>
                    <td>Admin</td>
                    <td>Php 5,092</td>
                    <td>
                      <button className="btn btn-md w-full btn-gray-500">
                        Cash in
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-md w-full btn-gray-500">
                        Cash out
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-md w-full btn-gray-500">Edit</button>
                    </td>
                    <td>
                      <button className="btn btn-md w-full bg-red-500 border-0">
                        Delete
                      </button>
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
};

export default UserManage;
