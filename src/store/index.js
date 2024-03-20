import { combineReducers, configureStore } from "@reduxjs/toolkit";
import redditReducer from "./redditSlice";

export default configureStore({
    reducer: combineReducers({
        reddit: redditReducer,
    }),
});