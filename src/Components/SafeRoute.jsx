import React,{Component}  from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import AuthenticationService from "../AuthenticationService";

class SafeRoute extends Component {
    render() {

        if (AuthenticationService.isUserLoggedIn('asmaa'))
            return <Route {...this.props} ></Route>
        else
            return <Redirect to="/login"></Redirect>

     }
}
export default SafeRoute;
