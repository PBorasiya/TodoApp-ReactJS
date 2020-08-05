import React, {Component} from 'react'


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
                                <tr key={todo.id}>
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

export default ListTodosComponent