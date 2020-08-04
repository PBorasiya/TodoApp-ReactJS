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
//test comments
class LoginComponent extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            username : 'pranav',
            password : ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    render(){
        return(
            <div className="LoginComponent">
            UserName : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

    loginClicked(){
        console.log(this.state)
    }

    handleChange(event) {
      console.log(event.target.name)
        this.setState({
            [event.target.name] : event.target.value
        })
    }

}

export default TodoApp