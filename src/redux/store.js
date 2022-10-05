import { configureStore, combineReducers } from "@reduxjs/toolkit";
import testReducer from "./slice/testSlice";
const rootReducer  = combineReducers({
    test: testReducer
});
export const store = configureStore({
    reducer: rootReducer
})