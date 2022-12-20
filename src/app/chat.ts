import { configureStore } from "@reduxjs/toolkit";
import { taskRedusers } from "../containers/chatSlice";

export const chat = configureStore({
  reducer: {
    task: taskRedusers
  },

});

export type RootState = ReturnType<typeof chat.getState>;
export type AppDispatch = typeof chat.dispatch;