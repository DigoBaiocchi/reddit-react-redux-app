import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: "allPostsSlice",
    initialState: [],
    reducers: {
        loadPosts: (state, action) => {
            return [action.payload]
        }
    }
};

const loadPostsSlice = createSlice(options);

export const { loadPosts } = loadPostsSlice.actions;

export default loadPostsSlice.reducer;