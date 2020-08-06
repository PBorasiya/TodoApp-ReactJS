import React, {Component} from 'react'

class TodoComponent extends Component{
    
    constructor(props){
        super(props)
        this.state={
            id: 4,
            username : "Vishoo",
            description : "Learn forms",
            completed : false,
            tarfetDate : new Date()
        }
        
    }
    
    render(){
        return <div>Todo Component ! {this.props.match.params.id}!</div>
        
    }
}

export default TodoComponent