import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "./features/tasks/taskSlice";
import boardReducer from "./features/board/boardSlice";

export const store = configureStore({
  reducer: { 
    tasks: tasksReducer,
    typeBoard: boardReducer,
  },
});
