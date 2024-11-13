import React from "react";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

function Body() {
  return (
    <div className="flex">
      {/* <h1>Body</h1> */}
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default Body;
