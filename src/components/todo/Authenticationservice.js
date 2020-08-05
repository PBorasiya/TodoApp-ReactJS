class AuthenticationService {

    registerSuccessfulLogin(username,password){
        
        sessionStorage.setItem('AauthenticatedUser',username)

    }

    logout(){
        sessionStorage.removeItem('AauthenticatedUser')
    }

}

export default new AuthenticationService()