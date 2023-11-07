import { configureStore } from "@reduxjs/toolkit";
import { loadPostsReducer } from "./loadPostsSlice";

export const store = configureStore({
    reducer: {
        loadPosts: loadPostsReducer
    }
});