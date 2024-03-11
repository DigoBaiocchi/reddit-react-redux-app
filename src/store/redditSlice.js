import { createSelector, createSlice } from "@reduxjs/toolkit";
import { redditPageApi, redditSearchApi } from "../api/redditApi";

const initialState = {
    posts: [],
};

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        }
    }
});

export const { 
    setPosts,
    setSearchTerm,
} = redditSlice.actions;

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
const selectSearchTerm = (state) => state.reddit.searchTerm;

export const selectFilteredPosts = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
        if (searchTerm !== '') {
            return posts.filter((post) => 
                post.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        return posts;
    }
);