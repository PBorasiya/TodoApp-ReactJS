import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent  extends Component{
    
    constructor(props){
        super(props)
        this.showWelcomeMsg = this.showWelcomeMsg.bind(this)
    }

    render(){
    return (
            <>
                <h1>Welcome </h1> 
                <div className="container">
                    WelCome! {this.props.match.params.name}!!
                    You can manage your todos <Link to="/todos">here.</Link>
                </div>
                <div className="container">
                    Click here to get the customized welcome message. <hr/>
                   <button className="btn btn-lg btn-info" onClick={this.showWelcomeMsg}>See customized welcome message</button>
                </div>
            </>
        )
    }

    showWelcomeMsg(){
        HelloWorldService.executeHelloWorldService()
        .then( response => console.log(response) )
        //.catch()
    }
}

export default WelcomeComponent