import React from "react";
import FullDrawer from "./Components/FullDrawer";

function Home() {
  return (
    <>
      <FullDrawer
        content={
          <>
            <div className="text-4xl md:w-1/4 font-extralight">
              Monitor all the activities of your website
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
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                      clip-rule="evenodd"
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
              <div className="flex flex-col gap-2 w-full">
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
              {/* 2nd section of wallets */}
              <div className="flex flex-col gap-2 w-full">
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
            </section>
          </>
        }
      />
    </>
  );
}

export default Home;
