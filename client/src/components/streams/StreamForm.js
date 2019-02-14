import React from 'react'
import {Field, reduxForm} from 'redux-form'

class StreamForm extends React.Component{

	errorDisplay(meta){ 
		if(meta.error && meta.touched){ 
			return (
				<div className="ui error message">
					<div className="header">{meta.error}</div>
				</div>
			);
		} 

		return null
	} 

	renderInput = (formProps) => { 


		return(
			<div className="field">
				<label>Enter {formProps.input.name}</label>
				<input {...formProps.input}/>
				{this.errorDisplay(formProps.meta)}
			</div>
			
		); 
	}

	onSubmit = (formValues) => { 
		this.props.onSubmit(formValues)
	}

	render() {

		return(
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
				<Field name="title" component={this.renderInput} /> 
				<Field name="description" component={this.renderInput} /> 
				<button className="ui button primary">Submit</button>
			</form>
		)
	}

}

const validate = (formValues) => { 
	const errors = {} 
	if(!formValues.title){ 
		errors.title = 'you must enter a title'
	}

	if(!formValues.descripton){ 
		errors.descripton = 'you must enter a description'
	}

	return errors; 
}

export default reduxForm({
	validate: validate,
	form: 'streamForm'
})(StreamForm); 



