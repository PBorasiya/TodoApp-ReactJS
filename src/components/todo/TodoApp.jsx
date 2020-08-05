import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">
                <Router>
                    <Route path="/" exact component={LoginComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                    <Route path="/welcome" component={WelcomeComponent}/>
                </Router>
                {/*<LoginComponent/>
                <WelcomeComponent/>*/}
            </div>
        )
    }
}

function ErrorComponent(){
    return <div>An error occured</div>
}


class WelcomeComponent  extends Component{
    render(){
        return <div>Welcome Pranav</div>
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
            {/*<ShowInvalidCredential hasLoginFailed={this.state.hasLoginFailed}/>*/}
            {this.state.hasLoginFailed && <div>Invalid Credentials!</div>}
            {this.state.showSuccessMessage && <div>Successful Login!</div>}
            {/*<ShowLoginSuccess showSuccessMessage={this.state.showSuccessMessage}/>*/}
            UserName : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

    loginClicked(){
        if(this.state.username==='pranav' && this.state.password==='dummy'){
            this.props.history.push("/welcome")
            this.setState({
               // showSuccessMessage : true,
                //hasLoginFailed: false
            })
        }else{
            
            this.setState({
                showSuccessMessage : false,
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


export default TodoApp