import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: "allPostsSlice",
    initialState: [],
    reducers: {
        loadPosts: (state, payload) => {
            return [action.payload]
        }
    }
};

const loadPostsSlice = createSlice(options);