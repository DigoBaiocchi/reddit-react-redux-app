import { createSlice } from "@reduxjs/toolkit";
import { redditPageApi } from "../api/redditApi";

const initialState = {
    posts: [],
    pageName: 'Home',
    subReddits: []
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
        },
        setSubReddits(state, action) {
            state.subReddits = action.payload;
        }
    }
});

export const { setPosts, setPageName, setSubReddits } = redditSlice.actions;

export default redditSlice.reducer;

export const fetchPosts = (pageName) => async (dispatch, getState) => {
    try {
        if (pageName === 'subreddits') {
            const subreddits = await redditPageApi('subreddits');
            dispatch(setSubReddits(subreddits));
        } else {
            const posts = await redditPageApi(pageName);
            dispatch(setPosts(posts));
        }
    } catch (err) {
        console.log(err);
    }
};

export const selectPosts = (state) => state.reddit.posts;
export const selectPageName = (state) => state.reddit.pageName;
export const selectSubReddits = (state) => state.reddit.subReddits;