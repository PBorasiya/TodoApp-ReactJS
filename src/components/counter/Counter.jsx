import React,{Component} from 'react';
import './Counter.css'
import propTypes from 'prop-types'


class Counter extends Component{
  
  constructor(){
    //super keyword is necessary in ES6 constructors, without that, it won't bind the values to properties.
    super()
    this.state = {
      counter:0
    }
    //to bind the method to class. without this, it will give an error and wont call the method.
    this.increment = this.increment.bind(this)
  }

  render(){
    return (
      <div className="Counter">
        <CounterButton/>
        <CounterButton by={5}/>
        <CounterButton by={10}/>
      </div>
    )
  }

  increment(){
    console.log("Parent class")
    //never access the state directly, use this method given by react to always handle it better and update the values
    // this.setState({
    //   counter : this.state.counter + this.props.by
    // })
  }
}

class CounterButton extends Component{
  //Define the initial state in a constructordsdsadad
//dsdadsadajdajfdahdahdashdakdasdhsdadkjasjdsadasjdhakdadsadsdsadadasdd
  constructor(){
    //super keyword is necessary in ES6 constructors, without that, it won't bind the values to properties.
    super()
    this.state = {
      counter:0
    }
    //to bind the method to class. without this, it will give an error and wont call the method.
    this.increment = this.increment.bind(this)
  }

  render(){
    return (
      //since the method is inside class, use this keyword to call the  method and bind it before using.
      <div className="CounterButton">
         <button onClick={this.increment}>+{this.props.by}</button>
        <span className="count">{this.state.counter}</span>
      </div>
    )
  }

  //update the state
  increment(){

    //never access the state directly, use this method given by react to always handle it better and update the values
    this.setState({
      counter : this.state.counter + this.props.by
    })
  }
}

CounterButton.defaultProps ={
  by : 1
}

CounterButton.propTypes = {
  by : propTypes.number
}
 

export default Counter
  