import React from "react";
import FullDrawer from "./Components/FullDrawer";
function ChangePassword() {
  return (
    <FullDrawer
      content={
        <>
          <div className="container max-w-md mx-auto border-2">
            <form className="my-8 mx-4">
              <div className="form-control">
                {" "}
                <label className="label">
                  Old Password
                  <input
                    type="password"
                    className="input"
                    placeholder="Enter old password"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  New Password
                  <input
                    type="password"
                    className="input"
                    placeholder="Enter new password"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  Confirm New Password
                  <input
                    type="password"
                    className="input"
                    placeholder="Confirm new password"
                  />
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

export default ChangePassword;
