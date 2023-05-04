import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function FullDrawer({ content }) {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col justify-start bg-gray-100">
          {/* Start of navbar */}
          <Navbar />
          {/* Start of breadcrumbs */}
          <Breadcrumbs />
          <section className="flex flex-col p-5 bg-gray-100">{content}</section>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default FullDrawer;
