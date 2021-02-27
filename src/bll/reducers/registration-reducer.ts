import {Dispatch} from 'redux';
import {setAppStatusAC} from './app-reducer';
import {registrationAPI, SignUpType} from '../../dal/RegistrationAPI';

enum Registration {
	SIGN_UP = 'SIGN_UP',
	SIGN_UP_ERROR = 'SIGN_UP_ERROR',
}

const initialState: InitialStateType = {
	isRegistration: false,
	registrationError: null
}

console.log(initialState.registrationError, 'initialState.registrationError')

export const registrationReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case Registration.SIGN_UP:
			return {
				...state,
				isRegistration: action.isRegistration
			}
		case Registration.SIGN_UP_ERROR:
			return {
				...state,
				registrationError: action.error
			}
		default:
			return state
	}
}

// actions
export const signUpAC = (isRegistration: boolean) => ({type: Registration.SIGN_UP, isRegistration} as const)
export const signUpServerErrorAC = (error: string | null) => ({type: Registration.SIGN_UP_ERROR, error} as const)

//thunks
export const signUpTC = (data: SignUpType) => (dispatch: Dispatch<ActionsType>) => {
	dispatch(setAppStatusAC('loading'))
	registrationAPI.signUp(data)
		.then((res) => {
			dispatch(signUpAC(true))
			console.log(res)
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			console.log(error)
			dispatch(signUpServerErrorAC(error))
		})
		.finally(() => {
			dispatch(setAppStatusAC('succeeded'))
		})
}

export type ActionsType =
	ReturnType<typeof signUpAC>
	| ReturnType<typeof setAppStatusAC>
	| ReturnType<typeof signUpServerErrorAC>


type InitialStateType = {
	isRegistration: boolean
	registrationError: null | string
}