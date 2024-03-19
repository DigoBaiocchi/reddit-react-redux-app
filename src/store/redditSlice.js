import { createSlice } from "@reduxjs/toolkit";
import { redditPageApi } from "../api/redditApi";

const initialState = {
    posts: [],
    pageName: 'Home'
};

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        setPageName(state, action) {
            state.pageName = action.payload;
        }
    }
});

export const { setPosts } = redditSlice.actions;

export default loadPostsSlice.reducer;

export const fetchPosts = () => async (dispatch, getState) => {
    try {
        const state = getState();
        const { pageName } = state;
        const posts = await redditPageApi(pageName);
        dispatch(setPosts(posts));
    } catch (err) {
        console.log(err);
    }
};

export const selectPosts = (state) => state.reddit.posts;
export const selectPageName = (state) => state.reddit.pageName;