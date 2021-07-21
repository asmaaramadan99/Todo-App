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

         this.refreshTodos()
    }
   refreshTodos()
   {
       let username=AuthenticationService.getLoggedInUsername()
       console.log(username)
       TodoService.retrieveAllTodos().then(Response=>{
           console.log(Response.data)
           this.setState({todos : Response.data})
       })
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
                 //Functional
                 // arrow function when passing parameters not bind
                 this.state.todos.map(
                     todo =>
                         <tr className="listItem" className= "table-light" onSelect={console.log("selected " + todo.id)} key={todo.id}>
                             <td >{todo.description}  </td>
                             <td>{todo.done.toString()}</td>
                             <td>{todo.targetDate.toString()}</td>
                             <td><button  className= "btn btn-success" onClick={()=>this.updateTodo(todo.id)} >Update</button>      <button   className="btn btn-danger" onClick={()=>this.deleteTodo(todo.id)} >Delete</button></td>

                         </tr>
                 )
             }
             </tbody>





         </table>
            </div>

        </div>
        )

    }

    deleteTodo(id)
    {
        let username = AuthenticationService.getLoggedInUsername()
        TodoService.deleteATodo(username,id).then(Response =>{ console.log("Done")
        this.refreshTodos()})
    }

    updateTodo(id)
    {
        this.props.history.push(`/todo/${id}`)
    }
}
export default TodosListComponent