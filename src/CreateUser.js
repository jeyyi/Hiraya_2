import React from "react";
import FullDrawer from "./Components/FullDrawer";

function CreateUser() {
  return (
    <>
      <FullDrawer
        content={
          <>
            <div className="container max-w-md mx-auto border-2">
              <form className="my-8 mx-4">
                <div className="form-control">
                  <label className="label">
                    Username
                    <input
                      type="text"
                      className="input"
                      placeholder="Enter your username"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    Password
                    <input
                      type="password"
                      className="input"
                      placeholder="Enter your password"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    Select Role
                    <select className="select">
                      <option value="admin">Admin</option>
                      <option value="manager">Manager</option>
                      <option value="player">Player</option>
                      <option value="game master">Game Master</option>
                      <option value="operator">Operator</option>
                      <option value="sub operator">Sub Operator</option>
                      <option value="master agent">Master Agent</option>
                      <option value="agent">Agent</option>
                    </select>
                  </label>
                </div>
                <button className="btn btn-gray-400 w-full mt-4">
                  Create User
                </button>
              </form>
            </div>
          </>
        }
      />
    </>
  );
}

export default CreateUser;
