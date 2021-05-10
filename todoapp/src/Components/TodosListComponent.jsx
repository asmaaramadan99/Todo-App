import React, {Component} from 'react'
import Header from "./Header";
import TodoService from "../API/todo/TodoService";
import AuthenticationService from "../AuthenticationService";

class TodosListComponent extends  Component{
    constructor(props) {
        super(props);
        this.state={
            todos : []

        }
    }
    componentDidMount() {
        let username=AuthenticationService.getLoggedInUsername()
        console.log(username)
        TodoService.retrieveAllTodos().then(Response=>{
            console.log(Response.data)
            this.setState({todos : Response.data})
            }
        )
    }

    render() {
        return(
        <div className="to-do-list">
            <Header></Header>
            <div className="container">
         <table className="table table-hover">
             <thead>
             <tr>

                 <th>Description</th>
                 <th>Status</th>
                 <th>Target Date</th>

             </tr>
             </thead>
             <tbody>
             {
                 this.state.todos.map(
                     todo =>
                         <tr className="listItem" className= "table-light" key={todo.id}>
                             <td>{todo.description}</td>
                             <td>{todo.done.toString()}</td>
                             <td>{todo.targetDate.toString()}</td>

                         </tr>
                 )
             }
             </tbody>





         </table>
            </div>

        </div>
        )

    }
}
export default TodosListComponent