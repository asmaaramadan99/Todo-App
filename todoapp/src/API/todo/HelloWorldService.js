import axios from "axios";
class HelloWorldService {

    sendHello()
    {

      return axios.get('http://localhost:8080/hello-world-bean/meow')
    }
}
export default new HelloWorldService();