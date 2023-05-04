import React from "react";
import { Link } from "react-router-dom";
import FullDrawer from "./Components/FullDrawer";

function Arena() {
  return (
    <>
      <FullDrawer
        content={
          <div className="container max-w p-5 flex flex-col bg-white rounded-lg">
            <div className="flex justify-between px-5 content-end">
              <p className="font-semibold text-l lg:text-xl">
                Arenas
              </p>
              <Link to="./create" className="btn btn-sm btn-gray-500">
                Add new arena
              </Link>
            </div>
            <div className="divider"></div>
            <div className="overflow-x-auto py-5">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>
                      1
                    </th>
                    <td>Hi-lo</td>
                    <td><a href="/">Edit</a></td>
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

export default Arena;
