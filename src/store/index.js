import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasksSlice";
import membersReducer from "../features/membersSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    members: membersReducer
  }
});
