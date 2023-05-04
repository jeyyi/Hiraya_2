import React from "react";
import FullDrawer from "./Components/FullDrawer";
function CreateArena() {
  return (
    <FullDrawer
      content={
        <>
          <div className="container max-w-md mx-auto border-2">
            <form className="my-8 mx-4">
              <div className="form-control">
                <label className="label">
                  Name
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter arena name"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  Stream URL
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter URL"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  Select Status
                  <select className="select">
                    <option value="admin">Active</option>
                    <option value="manager">Inactive</option>
                  </select>
                </label>
              </div>
              <button className="btn btn-gray-400 w-full mt-4">
                Create Arena
              </button>
            </form>
          </div>
        </>
      }
    />
  );
}

export default CreateArena;
