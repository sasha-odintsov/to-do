import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer";
import toolkitSlice from "./toolkitSlice";

// export const store = configureStore({
//   reducer: reducer
// })  
//// redux-toolkit variant

export const store = configureStore({
  reducer: toolkitSlice
})