import React, { useEffect } from "react";
import { YOUTUBE_API } from "../utils/constants";

function VedioContainer() {
  useEffect(() => {
    getVedio();
  }, []);
  const getVedio = async () => {
    const data = await fetch(YOUTUBE_API);

    const res = await data.json();

    console.log("res",res)
  };
  return <div>vedioContainer</div>;
}

export default VedioContainer;
