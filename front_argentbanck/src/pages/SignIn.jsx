import React from 'react';
import "./../style/SignIn.css"
import HeaderSignIn from '../components/header_SignIn/Header_SignIn'
import {useDispatch} from 'react-redux'
import {useNavigate} from "react-router-dom"
import {useState} from "react"
import { fetchUserToken, fetchUserData, setRemember } from '../redux/action_copie'




function SignIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {email, setEmail} = useState("")
    const {password, setPassword} = useState("")
    const {invalid, setInvalid} = useState(false)

    async function login(e) {
        e.preventDefault()

        const remember = document.getElementById("remember-me").ariaChecked
        const userLogin = {email, password}
        const token =  dispatch(fetchUserToken(userLogin))

        if (!token) {
            setInvalid(true)
            return;
        }
        setInvalid(false)
        dispatch(fetchUserData(token))

        remember ? setRemember(token.remember) : sessionStorage.setItem("token", token)
        navigate("/profile")
    }

    return (
        <div className='pageContainer'>
            <HeaderSignIn/>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={login}>
                        <div className="input-wrapper">
                            <label >Username</label>
                            <input type="text" id="lastName" setEmailvalue={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="input-wrapper">
                            <label >Password</label>
                            <input type="password" id="password" setPasswordvalue={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                        </div>
                            <button className="sign-in-button">Sign In</button>
                    </form>
                    {invalid ? <div className='messageConnexionError'>invalid credentials</div> : null}
                </section>
            </main>
        </div>
    );
}

export default SignIn;


