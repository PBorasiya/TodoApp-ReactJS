import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

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
    return <div>Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here.</Link></div>
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
                            <li className="nav-link"><Link to="/welcome/pranav">Home</Link></li>
                            <li className="nav-link"><Link to="/todos">Todos</Link></li>
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end"> 
                            <li className="nav-link"><Link to="/login">Login</Link></li>
                            <li className="nav-link"><Link to="/logout">LogOut</Link></li>
                        </ul>
                    
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component{
    render(){
        return (
            <div>
                Footer <hr/>
            </div>
        )
    }
}

export default TodoApp