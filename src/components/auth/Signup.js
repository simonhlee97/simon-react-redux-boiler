import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
// compose allows you to write multiple Higher ORder components
import * as actions from '../../actions'
class Signup extends Component {
	onSubmit = (formProps) => {
		this.props.signup(formProps)
	}

	render() {
		const { handleSubmit } = this.props

		return (
			<div>
				<form onSubmit={handleSubmit(this.onSubmit)}>
					<fieldset>
						<label>Email</label>
						<Field name="email" type="text" component="input" autoComplete="none" />
					</fieldset>
					<fieldset>
						<label>Password</label>
						<Field
							name="password"
							type="password"
							component="input"
							autoComplete="none"
						/>
					</fieldset>
					<button>Sign up</button>
				</form>
			</div>
		)
	}
}

export default compose(connect(null, actions), reduxForm({ form: 'signup' }))(Signup)
