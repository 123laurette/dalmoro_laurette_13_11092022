import React from 'react';
import {Link} from "react-router-dom"

//import {useNavigate, useParams} from "react-router-dom"
//import user from "../services/fetchApi"
import "./../style/SignIn.css"
import HeaderSignIn from '../components/header_SignIn/Header_SignIn';
//import { useState, useEffect } from 'react';



function SignIn() {

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
                            <input type="text" id="lastName" />
                        </div>
                        <div className="input-wrapper">
                            <label >Password</label>
                            <input type="password" id="password"/>
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label>Remember me</label>
                        </div>
                        <Link to="/User">
                            <button className="sign-in-button" type='submit'>Sign In</button>
                        </Link>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default SignIn;


/*const {id} = useParams()
console.log (id)
const navigate = useNavigate()
const [dataUser, setDataUser] = useState(false)

useEffect(() => {
    user(id)

    .then(data => {
        if (setDataUser(data)) {setDataUser(data)
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