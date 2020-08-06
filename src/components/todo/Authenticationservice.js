import axios from 'axios'

class AuthenticationService {

    registerSuccessfulLogin(username,password){
        
        sessionStorage.setItem('authenticatedUser',username)

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        this.setupRequestInterceptor(basicAuthHeader)
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