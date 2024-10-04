import { combineReducers } from "@reduxjs/toolkit"
import { presentationSlice } from "@/entities/presentation/model/slice";

export const rootReducer = combineReducers({
  [presentationSlice.name]: presentationSlice.reducer,
});