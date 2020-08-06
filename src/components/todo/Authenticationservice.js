import axios from 'axios'

class AuthenticationService {

    registerSuccessfulLogin(username,password){
        
        sessionStorage.setItem('authenticatedUser',username)
        this.setupRequestInterceptor()
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

    setupRequestInterceptor(){

        let username = 'pranav'
        let password = 'dummy'

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
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