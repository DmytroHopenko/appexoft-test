import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPostsData } from "./dataThink";

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getPostsData.fulfilled,
        (
          state,
          action: PayloadAction<{
            posts: PostProps[];
          }>
        ) => {
          state.posts = action.payload.posts;
          state.loading = false;
        }
      )
      .addCase(getPostsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default postsSlice.reducer;
