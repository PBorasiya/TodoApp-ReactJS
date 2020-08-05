import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class WelcomeComponent  extends Component{
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
}

export default WelcomeComponent