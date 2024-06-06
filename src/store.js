import { configureStore } from "@reduxjs/toolkit";
import allJobsSlice from "./feature/job/allJobsSlice";
import jobSlice from "./feature/job/job.slice";
import userSlice from "./feature/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
  },
});
