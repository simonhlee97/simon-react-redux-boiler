import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<div>
				<Link to="/">Simon Boiler-React</Link>
				<Link to="/signup">Sign up</Link>
				<Link to="/signin">Log in</Link>
				<Link to="/signout">Sign out</Link>
				<Link to="/profile">Profile</Link>
			</div>
		)
	}
}

export default Header
