import React from "react";
import FullDrawer from "./Components/FullDrawer";

function Home() {
  return (
    <>
      <input type="checkbox" id="my_modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="flex font-bold text-xl text-green-800">
            Success
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </span>
          </h3>
          <p className="py-4">Copied referral link to the clipboard</p>
          <div className="modal-action">
            <label htmlFor="my_modal" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
      <FullDrawer
        content={
          <>
            <div className="flex flex-col lg:flex-row py-5 gap-4">
              <h3 className="text-xl w-full lg:w-1/6">Referral Code:</h3>
              <label
                className="flex bg-gray-400 w-full text-md lg:text-xl justify-between px-5 py-2 rounded-lg cursor-pointer"
                htmlFor="my_modal"
              >
                <h3>https://hiraya.live/register?refID=7570</h3>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                    />
                  </svg>
                </span>
              </label>
            </div>
            <div className="text-sm font-thin ">
              See how many users are online, accounts activated and all pending
              requests
            </div>
            <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
              <div className="stat">
                <div className="stat-figure text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="stat-title">Online Users</div>
                <div className="stat-value text-green-600">25.6K</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Activated Account</div>
                <div className="stat-value text-blue-500">2.6M</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded-full">
                      <img
                        src="https://t4.ftcdn.net/jpg/00/65/77/39/360_F_65773929_AabGmfhJTOa6IsL8vNP7knxAl56YIQIJ.jpg"
                        alt="pending icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="stat-value text-red-600">250</div>
                <div className="stat-title">Pending Account</div>
                <div className="stat-desc">30+ rejected</div>
              </div>
            </div>
            {/* 2nd section*/}
            <section className="flex flex-col lg:flex-row gap-2 justify-between py-5">
              {/* Start of wallet Cards */}
              {/*   <div className="flex flex-col gap-2 w-full">
                <div className="stats shadow w-full">
                  <div className="stat">
                    <div className="stat-title">Total Page Views</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">21% more than last month</div>
                  </div>
                </div>
                <div className="stats shadow w-full">
                  <div className="stat">
                    <div className="stat-title">Total Page Views</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">21% more than last month</div>
                  </div>
                </div>
                <div className="stats shadow w-full">
                  <div className="stat">
                    <div className="stat-title">Total Page Views</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">21% more than last month</div>
                  </div>
                </div>
              </div> */}
              {/* 2nd section of wallets */}
              {/* <div className="flex flex-col gap-2 w-full">
                <div className="stats shadow w-full">
                  <div className="stat">
                    <div className="stat-title">Total Page Views</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">21% more than last month</div>
                  </div>
                </div>
                <div className="stats shadow w-full">
                  <div className="stat">
                    <div className="stat-title">Total Page Views</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">21% more than last month</div>
                  </div>
                </div>
                <div className="stats shadow w-full">
                  <div className="stat">
                    <div className="stat-title">Total Page Views</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">21% more than last month</div>
                  </div>
                </div>
              </div>
              <div className="stats shadow w-full h-full bg-green-500">
                  <div className="stat">
                    <div className="stat-title">Total Page Views</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">21% more than last month</div>
                  </div>
                </div> */}
            </section>
          </>
        }
      />
    </>
  );
}

export default Home;
