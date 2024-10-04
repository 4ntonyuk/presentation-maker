import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import type { Presentation } from "./types";

type PresentationSliseState = Presentation;

const initialState: PresentationSliseState = {
  title: "Новая презентация",
  slides: [],
  selectedSlides: [],
}

export const presentationSlice = createSlice({
  name: "presentation",
  initialState,
  reducers: {
    changeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  }
});

export const { 
  changeTitle,
} = presentationSlice.actions;