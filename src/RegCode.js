import React from "react";
import { Link } from "react-router-dom";
import FullDrawer from "./Components/FullDrawer";

function RegCode() {
  return (
    <>
      {/* Modal Start */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Maximum Usage</h3>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full my-4"
          />
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn bg-red-500 border-0">
              Cancel!
            </label>
            <button htmlFor="my-modal" className="btn bg-green-400 border-0 text-gray-800">
              Submit
            </button>
          </div>
        </div>
      </div>
      <FullDrawer
        content={
          <div className="container max-w p-5 flex flex-col bg-white rounded-lg">
            <div className="flex justify-between px-5 content-end">
              <p className="font-semibold text-l lg:text-xl">
                Registration Codes
              </p>
              <label htmlFor="my-modal" className="btn btn-sm btn-gray-500">
                Generate Code
              </label>
            </div>
            <div className="divider"></div>
            <div className="overflow-x-auto py-5">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Max Usage</th>
                    <th>Remaining Code</th>
                    <th>Date Created</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>
                      https://th2023.live/register?registration_code=rwssybwwxdsloh3k7dhb8byrmrhtco1c
                    </td>
                    <td>1000</td>
                    <td>897</td>
                    <td>2023-02-27 01:01:53</td>
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

export default RegCode;
