import { actions} from "./reducer_copie"
import { selectUser } from "./selectors_copie"
import SignIn from "../pages/SignIn"

function signOut() {
    return (dispatch) => {
        localStorage.clear();
        sessionStorage.clear();
        dispatch(actions.reset())
    }
}

function setRemember(token, remember){
    localStorage.setItem("token", token)
    localStorage.setItem("isRemembered", remember)
}

function fetchUserToken(userLogin) {
    return async (dispatch, getState) => {
        const tokenStatut = selectUser(getState()).tokenStatut  //créa const qui récupère uniquement le tockenStatut de l'utilisateur
        if((tokenStatut === "pending") || (tokenStatut === "updating")){//si en attente ou MAJ ne rien retourner
            return;
        }
        dispatch(actions.userTokenFetching(userLogin));//state final recup token de l'utilisateur logué

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userLogin),
        };
            try {
                const response = await fetch("http://localhost:3001/api/v1/user/login", options)
                if(response.statut === 400) {console.log("invalid fields")}
                if(response.statut === 401) {dispatch(actions.reset())}

                const data = await response.json();
                dispatch(actions.userTokenResolved(data.body.token));
                return data.body.token
            }
            catch(error) {
                dispatch(actions.userTokenRejected(error.message))
            }
        }
    }

    function fetchUserData(token) {
        return async (dispatch, getState) => {
            const statut = selectUser(getState()).dataStatut
            if((statut === "pending") || (statut === "updating")){
                return;
            }
            if((statut === "rejected")){
                dispatch(signOut())
                return (<SignIn/>);
            }
            dispatch(actions.userDataFetching(token));
    
            const options = {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
                try {
                    const response = await fetch("http://localhost:3001/api/v1/user/profile", options)
                    if(response.statut === 400) {console.log("invalid fields")}
                    if(response.statut === 401) {dispatch(signOut())}
    
                    const data = await response.json();
                    dispatch(actions.userDataResolved(token, data.body));
                    return data.body.token
                }
                catch(error) {
                    dispatch(actions.userDataRejected(error.message))
                }
            }
        }

        export  {setRemember, fetchUserToken,fetchUserData }
