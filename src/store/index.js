import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { redditReducer } from "./redditReducer";

export default configureStore({
    reducer: combineReducers({
        reddit: redditReducer,
    }),
});