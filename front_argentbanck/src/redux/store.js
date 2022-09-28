import userReducer from "../features/user"
import { configureStore } from "@reduxjs/toolkit";
//import { applyMiddleware, compose, legacy_createStore } from "redux";
//import user from "../middlewares/index";


const store = configureStore({
    reducer: {
        user:userReducer,

    }
})



export default store;








