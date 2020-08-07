import axios from 'axios'

class AuthenticationService {

    executeBasicAuthService(username,password){
        console.log('executeBasicAuthService')
        let basicAuth = 'Basic ' + window.btoa(username + ":" + password)
        return axios.get('http://localhost:8080/basicauth', {
            headers : {
                authorization : basicAuth
            }
        });
    }

    
   
    registerSuccessfulLogin(username,password){
        
        sessionStorage.setItem('authenticatedUser',username)

         let basicAuth = 'Basic ' + window.btoa(username + ":" + password)
        this.setupRequestInterceptor(basicAuth)
    }

    logOut(){
        
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')

        if(user === null) return false
        return true
    }

    getLoggedInUsername(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user === null) return ''
        return user
    }

    setupRequestInterceptor(basicAuthHeader){

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = basicAuthHeader
                }
                return config
            } 
        )
    }

}

export default new AuthenticationService()