import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import data from "./../utils/data.json";
import VedioCard from "./VedioCard";

function VedioContainer() {
  const [vedio, setVedio] = useState([]);
  useEffect(() => {
    setVedio(data.items);
  }, []);

  console.log("res", data.items);
  console.log("vedio", vedio);

  return (
    <div className="flex  flex-wrap  pt-4">
      {vedio.map((vedios, index) => (
        <VedioCard info={vedios} />
      ))}
    </div>
  );
}

export default VedioContainer;
