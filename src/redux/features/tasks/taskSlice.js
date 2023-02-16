import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "This is a task 1",
    created: "2020",
    deadline: "",
    type: "House",
    priority: "high",
    column: "todo",
  },
  {
    id: "2",
    title: "Task 2",
    description: "This is a task 2",
    created: "2021",
    deadline: "",
    type: "Job",
    priority: "low",
    column: "todo",
  },
];

const userSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
    },
    deleteTask: (state, action) => {
      const taskFound = state.find(task => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
    updateTask: (state, action) => {
      const { id, title, description } = action.payload;
      const taskFound = state.find(task => task.id === id);
      if (taskFound) {
        taskFound.title = title;
        taskFound.description = description;
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = userSlice.actions;
export default userSlice.reducer;
