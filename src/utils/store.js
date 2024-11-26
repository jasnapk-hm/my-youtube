import Chatmessage from "../components/Chatmessage";
import chatSlice from "./chatSlice";
import appSlice from "./Slice";
import searchSlice from "./searchSlice";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: { app: appSlice, search: searchSlice, chatmessage: chatSlice },
});

export default store;
