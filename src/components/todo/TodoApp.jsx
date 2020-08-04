import React, {Component} from 'react'

class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">
                My Todo App Component
                <LoginComponent/>
            </div>
        )
    }
}

class LoginComponent extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            username : 'pranav',
            password : ''
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    render(){
        return(
            <div className="LoginComponent">
            UserName : <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
            Password : <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
            <button>Login</button>
            </div>
        )
    }

    handleUsernameChange(event) {
      
        this.setState({
            username : event.target.value
            
        })
    }

    handlePasswordChange(event){
        console.log(event.target.value)
        this.setState({
            password: event.target.value
        })
    }
}

export default TodoApp