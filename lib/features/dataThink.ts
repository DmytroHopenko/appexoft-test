import { getPost, getPosts } from "@/actions/posts";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostsData = createAsyncThunk(
    "data/getPostsData",
    async () => {
        const postsResponse = await getPosts();

        return {
            posts: postsResponse,
        };
    }
)