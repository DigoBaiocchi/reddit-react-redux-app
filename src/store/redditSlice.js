import { createSlice } from "@reduxjs/toolkit";
import { postCommentsApi, redditPageApi, redditSearchApi } from "../api/redditApi";

const initialState = {
    posts: [],
    pageName: 'Home',
    subReddits: [],
    searchTerm: ''
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
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        }
    }
});

export const { 
    setPosts, 
    setPageName, 
    setSubReddits, 
    setSearchTerm,
} = redditSlice.actions;

export default redditSlice.reducer;

export const fetchPosts = (pageName) => async (dispatch) => {
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

export const fetchSearchTermPosts = (searchTerm) => async (dispatch) => {
    try {
        const searchTermPosts = await redditSearchApi(searchTerm);
        dispatch(setPosts(searchTermPosts));
    } catch (err) {
        console.log(err);
    }
};

export const selectPosts = (state) => state.reddit.posts;
export const selectPageName = (state) => state.reddit.pageName;
export const selectSubReddits = (state) => state.reddit.subReddits;
export const selectSearchTerm = (state) => state.reddit.searchTerm;