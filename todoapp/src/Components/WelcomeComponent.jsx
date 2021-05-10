import React, {Component} from 'react'
import WelcomeComponentStyle from './WelcomeComponentStyle.css'
import {Link,withRouter} from "react-router-dom";
import Header from "./Header";
import HelloWorldService from "../API/todo/HelloWorldService";
import TodoService from "../API/todo/TodoService";


class WelcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.sendRequest = this.sendRequest.bind(this)
        this.changeState = this.changeState.bind(this)

        this.state = {
            message: 'a'
        }
    }

    render() {
        return (
            <div>
                <Header></Header>
                <h1 className="Title"> TODO LIST</h1>
                <h1 className="welcome"> Welcome {this.props.match.params.username}</h1>
                <button onClick={TodoService.addTodo} className="show-list-button">

                    View my todo list
                </button>
                <div>
                    {this.state.message}
                </div>

            </div>
        );
    }

    sendRequest() {
        HelloWorldService.sendHello().then(
            promise => {
                console.log(promise.data)
                this.changeState(promise)

            })
    }
    changeState(promise)
    {
        this.setState({message : promise.data['message']})
    }
}
export default withRouter (WelcomeComponent)