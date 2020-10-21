import { AUTH_USER } from '../actions/types'

const INITIAL_STATE = {
	authenticated: '',
	errorMessage: '',
}

export default function (state = {}, action) {
	switch (action.type) {
		case AUTH_USER:
			return { ...state, authenticated: action.payload }
		default:
			return state
	}
}
