import React, {useState, useEffect} from 'react'
import Header from "./Header";
import TodoService from "../API/todo/TodoService";
import AuthenticationService from "../AuthenticationService";


const TodosListComponent = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        refreshTodos();
    },[todos])

    const refreshTodos = () => {
        let username = AuthenticationService.getLoggedInUsername()
        console.log(username)
        TodoService.retrieveAllTodos().then(Response => {
            setTodos(Response.data)
        })
    }

    return (
        <>
            <div className="to-do-list">
                <Header></Header>
                <div className="container">
                    <table className="table table-hover">
                        <thead>
                        <tr>

                            <th>Description</th>
                            <th>Status</th><th>Target Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            //Functional
                            // arrow function when passing parameters not bind
                            todos.map(
                                todo =>
                                    <tr className="listItem" className="table-light"
                                        onSelect={console.log("selected " + todo.id)} key={todo.id}>
                                        <td>{todo.description}  </td>
                                        <td>{todo.done.toString()}</td><td>{todo.targetDate.toString()}</td>
                                    </tr>)
                        }
                        </tbody>


                    </table>
                </div>

            </div>
        </>
    )


}
export default TodosListComponent