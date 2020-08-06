import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent  extends Component{
    
    constructor(props){
        super(props)
        this.showWelcomeMsg = this.showWelcomeMsg.bind(this)

        this.state={
            welcomeMessage : ''
        }

        this.handleError = this.handleError.bind(this)
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
                <div className="container">
                    <h1>{this.state.welcomeMessage}</h1>
                </div>
            </>
        )
    }

    showWelcomeMsg(){
        HelloWorldService.executeHelloWorldService()
        .then( response => (
            this.setState({
                welcomeMessage : response.data
            })
        ))
        .catch(error => this.handleError(error))
    }

    handleError(error){
        console.log(error)
        this.setState({
            welcomeMessage : error.response.data.message
        })
    }
}

export default WelcomeComponent