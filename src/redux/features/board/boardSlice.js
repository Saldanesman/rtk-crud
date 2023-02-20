import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoBoard: true,
};

const boardSlice = createSlice({
  name: "typeBoard",
  initialState,
  reducers: {
    updateBoard: (state, action) => {
      state.todoBoard = action.payload;
    },
  },
});

export const { updateBoard } = boardSlice.actions;
export default boardSlice.reducer;
