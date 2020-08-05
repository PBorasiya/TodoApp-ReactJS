import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './Authenticationservice.js'

class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/welcome/:name" component={WelcomeComponent}/>
                            <Route path="/todos" component={ListTodosComponent}/>
                            <Route path="/logout" component={LogOutComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                    <FooterComponent/>
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

class ListTodosComponent  extends Component{
    
    constructor(props){
        super(props)
        this.state={
            todos : 
            [
                {id : 1, description : 'Learn React' , done: false, targetDate : new Date()},
                {id : 2, description : 'Learn GraphQl',done: true, targetDate : new Date()},
                {id : 3, description : 'Learn Node.js',done: true, targetDate : new Date()},
            ]
        }
    }
    
    render(){
    return (
            <div>
                <h1>List Todos Component</h1>
                <table className="table"> 
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                       { 
                        this.state.todos.map(
                            todo => 
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


class WelcomeComponent  extends Component{
    render(){
    return <div className="container">
                <h1>Welcome {this.props.match.params.name}!!</h1>
                You can manage your todos <Link to="/todos">here.</Link>
                </div>
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
        if(this.state.username==='pranav' && this.state.password==='dummy'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
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

class HeaderComponent extends Component{
    render(){
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    
                        <ul className="navbar-nav">
                            <li><Link to="/welcome/pranav" className="nav-link">Home</Link></li>
                            <li><Link to="/todos" className="nav-link">Todos</Link></li>
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end"> 
                            <li><Link to="/login" className="nav-link">Login</Link></li>
                            <li><Link to="/logout" className="nav-link" onClick={AuthenticationService.logout}>LogOut</Link></li>
                        </ul>
                    
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component{
    render(){
        return (
            <footer className="footer">
                <span className="text-muted">
                    All rights reserved.
                </span>
            </footer>
        )
    }
}

class LogOutComponent extends Component{
    render(){
        return (
            <div>
               <h1>You are logged out.</h1>
               <div className="Container">
                   Thank you for using our application.
               </div>
            </div>
        )
    }
}

export default TodoApp