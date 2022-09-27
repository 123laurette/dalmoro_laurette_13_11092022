import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tokenStatut: "void",
    dataStatut: "void",
    data: null,
    error: null,
    token: null,
}

const {actions, reducer} = createSlice({
    name: "login",
    initialState,
    reducers: {
        userDataFetching: {
            prepare: (token) => ({
                payload: {token}
            }),
            reducer: (draft, actions) => {
                if(draft.dataStatut === undefined){
                return initialState;
            }
            if(draft.dataStatut === "void"){
                draft.dataStatut = "pending";
                return;
            }
            if(draft.dataStatut === "rejected"){
                draft.dataStatut = "pending";
                draft.error = null;
                return;
            }
            if(draft.dataStatut === "resolved"){
                draft.dataStatut = "updating";
                return;
            }
            },
        },
    userDataResolved: {
        prepare:(token, data) => ({
            payload: {token, data}
        }),
        reducer: (draft, action) => {
            if(draft.dataStatut === undefined){
                return initialState;
            }
            if(draft.dataStatut === "pending" || draft.dataStatut === "updating"){
                draft.dataStatut = "resolved";
                draft.data = action.payload.data;
                draft.token = action.payload.token;
                return;
            }
        }
    }
}
})
export {actions,reducer}