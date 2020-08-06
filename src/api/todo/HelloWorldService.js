import axios from 'axios'

class HelloWorldService{

    

    executeHelloWorldService(){

        let username = 'pranav'
         let password = 'dummy'

        let basicAuthHeader = 'Basic '+ window.btoa(username + ":" + password)
        return axios.get('http://localhost:8080/hello',
            {
                headers :{
                    authorization : basicAuthHeader
                }
            }
        )
    }
}

export default new HelloWorldService()