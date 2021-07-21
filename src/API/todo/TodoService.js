import axios from 'axios'
class TodoService {

     async  retrieveAllTodos(name)
        {
            return axios.get(`http://localhost:8080/users/${name}/todos`)
        }
       async deleteATodo(name,id)
        {
            return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
        }


}
export default new TodoService();