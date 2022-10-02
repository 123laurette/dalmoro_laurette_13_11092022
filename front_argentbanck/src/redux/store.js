import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/reducer';

export default configureStore({
    reducer: {
        user: userReducer,
    }
})








