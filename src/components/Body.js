import React from "react";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <div className="flex">
      {/* <h1>Body</h1> */}
      <Sidebar />

      {/* main container and watchpage only changing bas ed on the path */}
     <Outlet />
    </div>
  );
}

export default Body;
