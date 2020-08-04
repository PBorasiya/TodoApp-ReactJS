import React, {Component} from 'react'

class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">
                <LoginComponent/>
            </div>
        )
    }
}
//test comments
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
            <div className="LoginComponent">
            <ShowInvalidCredential hasLoginFailed={this.state.hasLoginFailed}/>
            <ShowLoginSuccess showSuccessMessage={this.state.showSuccessMessage}/>
            UserName : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

    loginClicked(){
        if(this.state.username==='pranav' && this.state.password==='dummy'){
            console.log('Successful')
            this.setState({
                showSuccessMessage : true
            })
        }else{
            console.log('Failed')
            this.setState({
                hasLoginFailed: true
            })
        }
    }

    handleChange(event) {
      console.log(event.target.name)
        this.setState({
            [event.target.name] : event.target.value
        })
    }

}

function ShowInvalidCredential(props){
    if(props.hasLoginFailed){
        return <div>Invalid Credentials!</div>
    }
    return null
}

function ShowLoginSuccess(props){
    if(props.showSuccessMessage){
        return <div>Successful Login!</div>
    }
    return null
}

export default TodoApp