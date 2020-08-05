import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class WelcomeComponent  extends Component{
    render(){
    return <div className="container">
                <h1>Welcome {this.props.match.params.name}!!</h1>
                You can manage your todos <Link to="/todos">here.</Link>
                </div>
    }
}

export default WelcomeComponent