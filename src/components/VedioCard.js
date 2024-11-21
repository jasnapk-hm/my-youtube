import React from "react";

function VedioCard({ info }) {
//   console.log("info", info);

  const { thumbnails, title, channelTitle } = info.snippet;
  return (
    <>
      <div className="flex flex-row shadow-lg  hover:bg-slate-300 bg-slate-100">
        <div>
          <img alt="vedios" className="m-4" src={thumbnails.medium.url}></img>
          <h1 className="font-bold text-sm m-2 truncate w-60"> {title}</h1>
          <h1 className=" text-sm m-2 truncate w-60"> {channelTitle}</h1>
        </div>
      </div>
    </>
  );
}

export default VedioCard;
