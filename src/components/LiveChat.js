import React, { useEffect, useState } from "react";
import Chatmessage from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName } from "../utils/helper";
import { generateStrings } from "../utils/helper";

function LiveChat() {
  const dispatch = useDispatch();
  const [liveMessage, SetLiveMessage] = useState("");
  const chat = useSelector((store) => store.chatmessage.message);
//   console.log("chat...", chat);
  useEffect(() => {
   //api polling
    const interval = setInterval(() => {
    //   console.log("API claaing");
      dispatch(
        addMessage({
          name: generateName(),
          message: generateStrings(20) + " 🚀 ",
        })
      );
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="ml-2 p-2  W-full overflow-y-scroll h-[600px] border border-black flex flex-col-reverse bg-slate-100  rounded-lg">
        {chat.map((chat, index) => (
          <Chatmessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      {/* <div className="w-full border border-black rounded-lg"> */}
        <form
        className="w-full p-2 m-2 border bg-slate-100 "
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Jasna P K",
                message: liveMessage,
              })
            );
            SetLiveMessage("")
          }}
         
        >
          <input
            className="px-2  w-90 border "
            type="text"
            value={liveMessage}
            onChange={(e) => SetLiveMessage(e.target.value)}
          ></input>
          <button className="border w-28 mx-2 border-gray-300 bg-green-200">
            Send
          </button>
        </form>
      {/* </div> */}
    </>
  );
}

export default LiveChat;
