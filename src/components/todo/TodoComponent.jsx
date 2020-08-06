import React, {Component} from 'react'
import moment from 'moment'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class TodoComponent extends Component{
    
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            username : "Vishoo",
            description : '',
            completed : false,
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit =  this.onSubmit.bind(this)
        this.validate =  this.validate.bind(this)
    }
    

    componentDidMount(){
        let username = AuthenticationService.getLoggedInUsername()
        TodoDataService.retrieveTodoById(username,this.state.id)
        .then(
            response =>  this.setState({
                description : response.data.description,
                targetDate : moment(response.data.targetDate).format('YYYY-MM-DD')
            })
        )
    }

    validate(values){
        let errors = {}
        if(!values.description){
            errors.description = "Enter a descriptin"
        }else if(values.description.length < 5){
            errors.description = "Enter atleast 5 characters"
        }

        if(!values.targetDate){
            errors.targetDate = "Enter date"
        }else if(!moment(values.targetDate).isValid){
            errors.targetDate = "enter valid target date"
        }
        return errors
    }

    onSubmit(values){
        let username = AuthenticationService.getLoggedInUsername()
        TodoDataService.updateTodo(username,this.state.id,{
            id : this.state.id,
            description : values.description,
            username : username,
            targetDate : values.targetDate,
            completed : values.completed
        }).then(() =>  this.props.history.push('/todos'))
    }
  
    render(){

        let {description,targetDate} = this.state

        return (
            <div>
                <h1>TODO</h1>
                <div className="container">
                    <Formik 
                            initialValues={{description,targetDate}}
                            onSubmit ={this.onSubmit}
                            validateOnBlur = {false}
                            validateOnChange = {false}
                            validate = {this.validate}
                            enableReinitialize = {true}
                    >
                        {
                            (props) => (
                               <Form>
                                   <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                   <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>

                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Submit</button>
                               </Form>
                            )
                        }
                    </Formik>
                </div> 
            </div>
        )
    }
}

export default TodoComponent