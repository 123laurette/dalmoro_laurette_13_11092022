import React from 'react';
import {useNavigate, useParams} from "react-router-dom"
import dataFetch from "../services/fetchApi"
import "./../style/SignIn.css"
import HeaderSignIn from '../components/header_SignIn/Header_SignIn';
import { useState, useEffect } from 'react';


function SignIn() {
    const {id} = useParams()
    console.log (id)
    const navigate = useNavigate()
    const [dataUser, setDataUser] = useState(false)

    useEffect(() => {
        dataFetch(id)

        .then(data => {
            if (typeof data !== "undefined") {setDataUser(data)
        }else{
            navigate("/Error")
        }
        })
        .catch(error => console.log("pas de données transmises", error))
    },
    [id, navigate])

    if(!dataUser){
        return null
    }
    return (
        <div>
            <HeaderSignIn/>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label >Username</label>
                            <input type="email" id="email" value={`${dataUser.data.email}`} />
                        </div>
                        <div className="input-wrapper">
                            <label >Password</label>
                            <input type="password" id="data.password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label>Remember me</label>
                        </div>
                        <button className="sign-in-button" type='submit'>Sign In</button>

                    </form>
                </section>
            </main>
        </div>
    );
};

export default SignIn;


/*function SignIn () {
    const {id} = useParams()
    console.log (id)
    const navigate = useNavigate()
    const [dataUser, setDataUser] = useState(false)

    useEffect(() => {
        dataFetch(id)

        .then(data => {
            if (typeof data !== "undefined") {setDataUser(data)
        }else{
            navigate("/Error")
        }
        })
        .catch(error => console.log("pas de données transmises", error))
    },
    [id, navigate])

    if(!dataUser){
        return null
    }*/