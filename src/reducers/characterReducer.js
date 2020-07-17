import { CHARACTER_SUCCESS, CHARACTER_ERROR } from '../actions'

export const characteReducer = (state = null, { type, payload }) => {
	switch(type) {
		case CHARACTER_SUCCESS: 
			return payload.data

		case CHARACTER_ERROR: 
			return payload.error

		default: 
			return state
			
	}
}