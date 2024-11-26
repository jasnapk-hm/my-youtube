import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import data from "./../utils/data.json";
import VedioCard from "./VedioCard";
import { Link } from "react-router-dom";

function VedioContainer() {
  const [vedio, setVedio] = useState([]);
  useEffect(() => {
    setVedio(data.items);
  }, []);

  return (
    <div className="flex cursor-pointer flex-wrap  pt-4" >
      {vedio.map((vedios, index) => (
        <Link to={"/watch?v=" + vedios?.id}>
          {" "}
          <VedioCard key={vedios.id} info={vedios} />
        </Link>
      ))}
    </div>
  );
}

export default VedioContainer;
