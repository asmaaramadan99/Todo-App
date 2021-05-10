import React,{Component} from 'react'
import {Link, Router, withRouter} from "react-router-dom";
import AuthenticationService from "../AuthenticationService";
class Header extends Component{
    render() {
        return(
        <header>
         <nav className="navbar navbar-expand-md navbar-dark bg-dark">
             <div className="navbar-brand">
                 <ul className="navbar-nav">
                     <li> <Link className="nav-link" to={`/welcome/asmaa`}>Welcome</Link></li>
                     <li><Link className="nav-link" to={`/todos`}>Todos</Link></li>
                 </ul>
             </div>
             <div className="navbar-brand navbar-collapse justify-content-end">
                 <ul className="navbar-nav ">
                     <li> <Link className="nav-link" to="/login"  onClick={AuthenticationService.logout}>Logout</Link></li>
                 </ul>
             </div>
         </nav>
        </header>
        )
    }
}
export default withRouter (Header)