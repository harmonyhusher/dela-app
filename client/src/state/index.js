import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: "null",
  token: null,
  posts: [],
  city: null,
  users: [],
  // URL: "https://affairssoical.onrender.com",
  URL: "http://localhost:3001"
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
        state.user = null;
        state.token = null;
      },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("User friends non-existent");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPost = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPost;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    updateUser: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token;
    },
    setUsers: (state, action) => {
      state.users = action.payload.users;
    },
  },
});
export const { setMode, setLogin, setLogout, setFriends, setPost, setPosts, setUsers} =
  authSlice.actions;
export default authSlice.reducer;

