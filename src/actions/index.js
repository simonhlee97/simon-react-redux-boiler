import axios from 'axios'
import { AUTH_USER, AUTH_ERROR } from './types'

export const signup = (formProps, callback) => async (dispatch) => {
	try {
		const response = await axios.post('http://localhost:3090/signup', formProps)
		dispatch({ type: AUTH_USER, payload: response.data.token })
		localStorage.setItem('token', response.data.token)
		callback()
	} catch (error) {
		dispatch({ type: AUTH_ERROR, payload: 'Email is not available' })
	}
}

// Redux Thunk allows us to push Actions through a "Dispatch Funnel" to Thunk Middleware to Reducers
// Thunk is an alternative approach to async action creators (unlimited number of actions)...different than the single Redux Promise.
// export const signup = ({ email, password }) => {
// 	return  (dispatch) =>  {
// 	}
// }
