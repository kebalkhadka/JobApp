import { configureStore } from "@reduxjs/toolkit";
import authSlice from './slices/authSlice.js'
import jobSlice from './slices/jobSlice.js'

const store = configureStore({
    reducer:{
        auth:authSlice,
        job:jobSlice
    }


})
export default store;