import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            username : 'pranav',
            password : '',
            hasLoginFailed : false,
            showSuccessMessage : false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                    
                    {this.state.hasLoginFailed && <div>Invalid Credentials!</div>}
                    {this.state.showSuccessMessage && <div>Successful Login!</div>}
                    <form>
                    
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/></div>
                        
                        <div className="form-group">
                        <label htmlFor="exampleInputpassword">Password</label>:<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/></div>
                        
                        <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                    
                    </form>
                </div>
            </div>
        )
    }

    loginClicked(){
        console.log('loginClicked')
        AuthenticationService.executeBasicAuthService(this.state.username,this.state.password).then(()=> 
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password),
            this.props.history.push(`/welcome/${this.state.username}`)
        ).catch(() =>{
                    console.log('AAAAAA')
                this.setState({showSuccessMessage : false})
                this.setState({hasLoginFailed: true})
            })
        // if(this.state.username==='pranav' && this.state.password==='dummy'){
        //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`)
        //     this.setState({
        //        // showSuccessMessage : true,
        //         //hasLoginFailed: false
        //     })
        // }else{
            
        //     this.setState({
        //         showSuccessMessage : false,
        //         hasLoginFailed: true
        //     })
        // }
        
    }

    handleChange(event) {
      console.log(event.target.name)
        this.setState({
            [event.target.name] : event.target.value
        })
    }

}

export default LoginComponent