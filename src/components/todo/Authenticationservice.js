class AuthenticationService {

    registerSuccessfulLogin(username,password){
        
        sessionStorage.setItem('authenticatedUser',username)
    }

    logOut(){
        
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')

        if(user === null) return false
        return true
    }

}

export default new AuthenticationService()