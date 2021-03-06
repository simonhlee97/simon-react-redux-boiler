import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// conditionally show navLinks
import { connect } from 'react-redux'
import '../components/header.css'
class Header extends Component {
	renderNavlinks() {
		if (this.props.authenticated) {
			return (
				<div>
					<Link to="/signout">Sign out</Link>
					<Link to="/profile">Profile</Link>
				</div>
			)
		} else {
			return (
				<div>
					<Link to="/signup">Sign up</Link>
					<Link to="/signin">Log in</Link>
				</div>
			)
		}
	}
	render() {
		return (
			<div className="header">
				<Link to="/">Simon Boiler-React</Link>
				{this.renderNavlinks()}
			</div>
		)
	}
}
function mapStateToProps(state) {
	return { authenticated: state.auth.authenticated }
}
export default connect(mapStateToProps)(Header)
