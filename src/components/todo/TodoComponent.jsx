import React, {Component} from 'react'
import moment from 'moment'
import {Formik, Form, Field, ErrorMessage} from 'formik'

class TodoComponent extends Component{
    
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            username : "Vishoo",
            description : "Learn meditation",
            completed : false,
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit =  this.onSubmit.bind(this)
        this.validate =  this.validate.bind(this)
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
        }else if(moment(values.targetDate).isValid){
            errors.targetDate = "enter valid target date"
        }
        return errors
    }

    onSubmit(values){
        console.log(values)
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
                                        <Field className="form-control" type="dare" name="targetDate"/>
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