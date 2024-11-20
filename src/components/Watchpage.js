import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/Slice";
import { useSearchParams } from "react-router-dom";

function Watchpage() {
  const dispatch = useDispatch();
  const [searchparam] = useSearchParams();

  useEffect(() => {
    console.log("parm id", searchparam.get("v"));
    dispatch(closeMenu());
  }, []);
  return (
    <div className="p-4">
   
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/"+searchparam.get("v")}
        title="MERN Stack is Dead?  (the right full-stack path for 2025)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Watchpage;
