import React from 'react'
import requireAuth from './requireAuth'

const Profile = () => {
	return (
		<div>
			<h1>Your Dashboard</h1>
			<p>(this is a protected route - requires auth)</p>
		</div>
	)
}

export default requireAuth(Profile)
