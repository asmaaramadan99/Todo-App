import React, {useState, useEffect} from 'react'
import LoginComponentStyle from './LoginComponentStyle.css'
import AuthenticationService from "../AuthenticationService.js";
import {useHistory} from 'react-router-dom';


const LoginComponent = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginStatus] = useState(false)
    const history = useHistory();

    const redirect = () => {
        AuthenticationService.registerSuccessfullyLoggedInUser(username, password);
        history.push(`/welcome/${username}`);
    }


    return (

        <div className="login-box">
            <h1 className="Title"> TODO LIST</h1>
            <h1 className="title">SIGN IN</h1>
            <div className="text-box">
                <input
                    className="username"
                    name="username" type="text"
                    placeholder="Username"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                ></input>
            </div>
            <div className="text-box">
                <input
                    className="password"
                    name="password" type="password"
                    placeholder="Password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}>
                </input>
            </div>

            <button className="submit" onClick={redirect}>Login</button>
            <div className="invalidCredentials">
                {loginStatus && <div className="alert alert-warning">Invalid Credentials</div>}
            </div>
        </div>

    )


}


export default LoginComponent