//contient la logique redux concernant la récup datas user
import produce from "immer";
import { selectUser } from "../redux/selectors_copie"



const initialState = {
    status: "void",
    data: null,
    error: null,
}

const FETCHING = "user/fetching"
const RESOLVED = "user/resolved"
const REJECTED = "user/rejected"

//actions creator
const userFetching = () => ({type: FETCHING});

const userResolved = (data) => ({ type: RESOLVED, payload: data});

const userRejected = (error) => ({ type: REJECTED, payload: error});

export default function userReducer (state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case FETCHING: {
                if (draft.status === "void") {
                    draft.status = "pending";
                    return;
                }
                if (draft.status === "rejected") {
                    draft.error = null
                    draft.status = "pending";
                    return;
                }
                if (draft.status === "resolved") {
                    draft.status = "pending";
                    return;
                }
                return;
            }
            case RESOLVED: {
                if (draft.status === "pending" || draft.status === "updating") {
                    draft.data = action.payload;
                    draft.status = "resolved";
                    return;
                }
                return;
            }
            case REJECTED: {
                if (draft.status === "pending" || draft.status === "updating") {
                    draft.error = action.payload
                    draft.data = null
                    draft.status = "rejected"
                    return
                }
                return
            }
            default:
                return
        }
    });
}

export async function fetchOrUpdateUser(store, userLogin) {

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(userLogin),
    };


    const status = selectUser(store.getState()).status
    if (status === "pending" || status === "udpating") {
        return
    }
    store.dispatch(userFetching())
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", options)
        if(response.statut === 400) {console.log("invalid fields")}
        const data = await response.json()    
        store.dispatch(userResolved(data))
    }catch(error) {
        store.dispatch(userRejected(error))
    }
}
