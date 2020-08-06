import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService'
import moment from 'moment'

class ListTodosComponent  extends Component{
    
    constructor(props){
        super(props)
        this.state={
            todos : [],
            message : null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
    }

    componentDidMount(){
        this.refreshTodos();
    }
    
    refreshTodos(){
        let username = AuthenticationService.getLoggedInUsername()
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                this.setState({
                    todos: response.data
                })
            }
        )
        .catch()
    }


    addTodoClicked(){
        console.log('add')
        //below line is used to redirect from one page to another
        this.props.history.push(`/todos/-1`)
    }

    deleteTodoClicked(id){
        let username = AuthenticationService.getLoggedInUsername()
        TodoDataService.deleteTodo(username,id)
        .then(
            response => {
                this.setState({
                    message : `Delete of todo with id ${id} successful for user ${username}`
                })
                this.refreshTodos()
            }
        )
    }

    updateTodoClicked(id){
        console.log('update' +id)
        //below line is used to redirect from one page to another
        this.props.history.push(`/todos/${id}`)
    }

    render(){
    return (
            <div>
                <h1>List Todos Component</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <table className="table"> 
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       { 
                        this.state.todos.map(
                            todo => 
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.username}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.completed.toString()}</td>
                                    <td>{moment(todo.targetDate).utc().format('YYYY-MM-DD')}</td>
                                    
                                    <td><button className="btn btn-warning" onClick={()=>this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={()=>this.updateTodoClicked(todo.id)}>Update</button></td>
                                </tr>
                        )
                        }
                    </tbody>
                </table>
                <div className="row">
                        <button className="btn btn-lg btn-success" onClick={this.addTodoClicked}>Add Todo</button>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent