import axios from 'axios'
import { AUTH_USER } from './types'

// Redux Thunk allows us to push Actions through a "Dispatch Funnel" to Thunk Middleware to Reducers
// Thunk is an alternative approach to async action creators (unlimited number of actions)...different than the single Redux Promise.
// export const signup = ({ email, password }) => {
// 	return  (dispatch) =>  {
// 	}
// }

export const signup = (formProps) => (dispatch) => {
	axios.post('http://localhost:3090/signup', formProps)
}
