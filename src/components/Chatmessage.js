import React from "react";

function Chatmessage({ name, message }) {
  return (
    <div className="flex items-center">
      <img
        src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTY1LWtsaGN3ZWNtLmpwZw.jpg"
        className="w-9 h-9 col-span-1 "
        alt="user"
      ></img>
      <div className="flex flex-wrap shadow-sm">
        {" "}
        <p className="pl-2 font-bold">{name}</p>
        <p className="pl-2">{message}</p>
      </div>
    </div>
  );
}

export default Chatmessage;
