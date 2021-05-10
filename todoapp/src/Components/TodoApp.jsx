import React,{Component} from 'react'
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import TodosListComponent from "./TodosListComponent"
import SafeRoute from "./SafeRoute"
import Header from "./Header"

class TodoApp extends Component{
    //passing params in url is added to component props
    //Switch works sequentially
    render() {
        return(
            <div className="TodoApp">

                <Router>
                    <Switch>
                    <Route path="/" exact component={LoginComponent}></Route>
                    <Route path="/login" component={LoginComponent}></Route>
                        <SafeRoute path="/welcome/:username" component={WelcomeComponent}></SafeRoute>
                        <SafeRoute path="/todos" component={TodosListComponent}></SafeRoute>
                    <Route path="" component={ErrorComponent}></Route>

                    </Switch>
                </Router>



           </div>
        )
    }

}
function ErrorComponent(){
    return (
        <div>Error occurred</div>
    )
}
export default TodoApp