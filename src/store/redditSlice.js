import { createSelector, createSlice } from "@reduxjs/toolkit";
import { redditPageApi } from "../api/redditApi";

const initialState = {
    posts: [],
};

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        }
    }
});

export const { setPosts } = redditSlice.actions;

export default redditSlice.reducer;

export const fetchPosts = (subreddit) => async (dispatch) => {
    try{
        const posts = await redditPageApi(subreddit);

        dispatch(posts);
    } catch (error) {
        console.log(error);
    }
};

const selectPosts = (state) => state.reddit.posts;

export const selectFilteredPosts = createSelector(
    [selectPosts],
    (posts) => {
        return posts;
    }
);