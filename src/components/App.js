import React from 'react'
import Header from './Header'
// CSS files
import './styles.css'
export default ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}
