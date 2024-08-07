import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import customFetch from "../utils/axios";
import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../utils/localStorage";
import {
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
} from "./userThunk";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};

//HTTP call for user register
//asynchronous action creator in Redux.
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk("/auth/register", user, thunkAPI);
  }
);
//HTTP call for user login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk("/auth/login", user, thunkAPI);
  }
);
//HTTP call for user job update
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    return updateUserThunk("/auth/updateUser", user, thunkAPI);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
  },

  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    // payload has what we are returing
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Hello there ${user.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    // login reducer

    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Welcome there ${user.name}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    //update user
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`User updated ${user.name}`);
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;

// export const registerUser = createAsyncThunk(...): This line exports a constant named registerUser.
// It's likely used to create an asynchronous action creator in Redux.

// createAsyncThunk("user/registerUser", async (user, thunkAPI) => {...}):
//This is where the asynchronous action creator is defined. The createAsyncThunk function is provided by Redux Toolkit.
//It takes two arguments: a string representing the action type prefix and an async callback function.
//In this case, the action type prefix is "user/registerUser".

// async (user, thunkAPI) => {...}: This is an asynchronous arrow function that takes two parameters: user and thunkAPI.
//The user parameter likely represents the data of the user being registered.

// return registerUserThunk("/auth/register", user, thunkAPI);: Inside the async function, it appears to be calling another
//function named registerUserThunk with three parameters: a URL "/auth/register", the user object, and thunkAPI.

// This function is not directly provided by Redux Toolkit; it seems to be a custom or external function responsible for handling the registration logic.
