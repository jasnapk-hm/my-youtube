import appSlice from "./Slice";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({ reducer: { app: appSlice } });

export default store;
