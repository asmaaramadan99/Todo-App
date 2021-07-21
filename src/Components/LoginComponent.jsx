import React, {Component} from 'react'
import LoginComponentStyle from './LoginComponentStyle.css'
import AuthenticationService from "../AuthenticationService.js";


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: '',
            hasLoginFailed : false
        }
        this.handleChange=this.handleChange.bind(this)

    }
    render() {
        return (

            <div className="login-box">
                <h1 className="Title"> TODO LIST</h1>
                <h1 className="title">SIGN IN</h1>
                <div className="text-box">
                    <input
                        className="username"
                        name="username" type="text"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    ></input>
                </div>
                <div className="text-box">
                    <input
                        className="password"
                        name="password" type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}>

                    </input>
                </div>

                <button className="submit" onClick={()=>this.submit()}>Login</button>
                <div className="invalidCredentials">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                </div>
            </div>

        )
    }



    //generic event
    handleChange(event)
    {

      this.setState(
          this.state={
              [event.target.name] : event.target.value
          }
      )
    }
    submit()
    {
        AuthenticationService.registerSuccessfullyLoggedInUser(this.state.username,this.state.password)
        this.props.history.push(`/welcome/${this.state.username}`)
    }



}


export default LoginComponent