import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {

    const isMenu= useSelector((store)=>store.app.isMenu)
  return !isMenu ? null : (
    <div className="bg-white shadow-2xl p-8 w-48">
 
      <ul>
        <li ><Link className="hover:font-bold" to="/">Home</Link></li>
        <li>Shorts</li>
        <li>vedios</li>
      </ul>
      <h1 className="font-bold pt-3">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>games</li>
        <li>movies</li>
      </ul>
      <h1 className="font-bold pt-3">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>games</li>
        <li>movies</li>
      </ul>
    </div>
  );
}

export default Sidebar;
