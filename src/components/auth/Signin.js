import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
// compose allows you to write multiple Higher ORder components
import * as actions from '../../actions'
class Signin extends Component {
	onSubmit = (formProps) => {
		this.props.signin(formProps, () => {
			this.props.history.push('/profile')
		})
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
					<div>{this.props.errorMessage}</div>
					<button>Log in</button>
				</form>
			</div>
		)
	}
}
function mapStateToProps(state) {
	return { errorMessage: state.auth.errorMessage }
}

export default compose(connect(mapStateToProps, actions), reduxForm({ form: 'signin' }))(Signin)
