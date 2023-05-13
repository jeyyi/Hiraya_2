import React from "react";
import FullDrawer from "./Components/FullDrawer";
function ViewBattle() {
  return (
    <>
      <FullDrawer
        content={
          <>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col lg:flex-row justify-between lg:pr-20 gap-2">
               {/*  <div>
                  <Link
                    to="/history"
                    className="btn btn-gray-500 btn-sm content-center py-5"
                  >
                    Back to Histories
                  </Link>
                </div> */}
                <p className="text-md lg:text-lg font-semibold lg:font-bold">
                  Status:
                  <span className="text-md lg:text-lg font-semibold lg:font-bold text-green-500">
                    Active
                  </span>
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="text-md lg:text-lg font-semibold lg:font-bold">
                  Fight No.
                  <span className="text-md lg:text-lg font-semibold lg:font-bold text-blue-500">
                    135
                  </span>
                </p>
                <p className="font-bold text-gray-900 text-xl">|</p>
                <p className="text-md lg:text-lg font-semibold lg:font-bold">
                  Battle Id.
                  <span className="text-md lg:text-lg font-semibold lg:font-bold text-blue-500">
                    4682
                  </span>
                </p>
                <p className="font-bold text-gray-900 text-xl">|</p>
                <p className="text-md lg:text-lg font-semibold lg:font-bold">
                  Battle Code
                  <span className="text-md lg:text-lg font-semibold lg:font-bold text-blue-500">
                    orRmTbgq
                  </span>
                </p>
              </div>
              <div className="divider" />
              {/* First Card */}
              <div className="bg-white p-5 rounded-md shadow-lg">
                <div className="flex justify-between lg:pr-20">
                  <p className="text-black font-medium text-md">
                    Meron Bet
                  </p>
                  <p className="text-black font-medium text-md">
                    ₱0.00
                  </p>
                </div>
                <div className="flex justify-between lg:pr-20">
                  <p className="text-black font-medium text-md">
                    Wala Bet
                  </p>
                  <p className="text-black font-medium text-md">
                    ₱0.00
                  </p>
                </div>
                <div className="flex justify-between lg:pr-20">
                  <p className="text-black font-medium text-md">
                    Draw Bet
                  </p>
                  <p className="text-black font-medium text-md">
                    ₱0.00
                  </p>
                </div>
                <div className="divider"></div>
                <div className="flex justify-between lg:pr-20">
                  <p className="text-black font-medium text-md">
                    Total Bet
                  </p>
                  <p className="text-black font-medium text-md">
                    ₱0.00
                  </p>
                </div>
              </div>
              {/* Second Card */}
              <div className="bg-white p-5 rounded-md shadow-md">
                <div className="flex justify-between lg:pr-20">
                  <p className="text-black font-medium text-md">
                    Payout
                  </p>
                  <p className="text-black font-medium text-md">
                    ₱0.00
                  </p>
                </div>
                <div className="flex justify-between lg:pr-20">
                  <p className="text-black font-medium text-md">
                    Net Pay
                  </p>
                  <p className="text-black font-medium text-md">
                    ₱0.00
                  </p>
                </div>
              </div>
              {/* Third Card - Commissions */}
              <div className="bg-white p-5 rounded-md shadow-md">
                <div className="flex justify-between lg:pr-20">
                  <p className="text-black font-medium text-md">
                    Admin Commission
                  </p>
                  <p className="text-black font-medium text-md">
                    ₱0.00
                  </p>
                </div>
                <div className="flex justify-between lg:pr-20">
                  <p className="text-black font-medium text-md">
                    Operator Commission
                  </p>
                  <p className="text-black font-medium text-md">
                    ₱0.00
                  </p>
                </div>
                <div className="flex justify-between lg:pr-20">
                  <p className="text-black font-medium text-md">
                    Sub Operator Commission
                  </p>
                  <p className="text-black font-medium text-md">
                    ₱0.00
                  </p>
                </div>
                <div className="flex justify-between lg:pr-20">
                  <p className="text-black font-medium text-md">
                    Master Agent Commission
                  </p>
                  <p className="text-black font-medium text-md">
                    ₱0.00
                  </p>
                </div>
                <div className="flex justify-between lg:pr-20">
                  <p className="text-black font-medium text-md">
                    Agent Commission
                  </p>
                  <p className="text-black font-medium text-md">
                    ₱0.00
                  </p>
                </div>
                <div className="divider"/>
                <div className="flex justify-between lg:pr-20">
                  <p className="text-black font-medium text-md">
                    Total Commission
                  </p>
                  <p className="text-black font-medium text-md">
                    ₱0.00
                  </p>
                </div>
              </div>
            </div>
          </>
        }
      />
    </>
  );
}

export default ViewBattle;
