import {Dispatch} from 'redux';
import {RequestStatusType} from './app-reducer';
import {registrationAPI, SignUpType} from '../../dal/RegistrationAPI';
import {toast} from 'react-hot-toast';

enum SIGN_UP {
	SIGN_UP = 'SIGN_UP',
	SIGN_UP_ERROR = 'SIGN_UP_ERROR',
	SIGN_UP_STATUS = 'SIGN_UP_STATUS',
}

const initialState: InitialStateType = {
	isRegistration: false,
	registrationError: null,
	status: 'idle'
}

export const signUpReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case SIGN_UP.SIGN_UP:
			return {
				...state,
				isRegistration: action.isRegistration
			}
		case SIGN_UP.SIGN_UP_ERROR:
			return {
				...state,
				registrationError: action.error
			}
		case SIGN_UP.SIGN_UP_STATUS:
			return {
				...state,
				status: action.status
			}
		default:
			return state
	}
}

// actions
export const signUpAC = (isRegistration: boolean) => ({type: SIGN_UP.SIGN_UP, isRegistration} as const)
export const signUpServerErrorAC = (error: string | null) => ({type: SIGN_UP.SIGN_UP_ERROR, error} as const)
export const signUpStatusAC = (status: RequestStatusType) => ({type: SIGN_UP.SIGN_UP_STATUS, status} as const)

//thunks
export const signUpTC = (data: SignUpType) => (dispatch: Dispatch<ActionsType>) => {
	dispatch(signUpStatusAC('loading'))
	registrationAPI.signUp(data)
		.then((res) => {
			dispatch(signUpAC(true))
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			dispatch(signUpServerErrorAC(error))
			toast.error(error)
		})
		.finally(() => {
			dispatch(signUpStatusAC('succeeded'))
		})
}

export type ActionsType =
	ReturnType<typeof signUpAC>
	| ReturnType<typeof signUpServerErrorAC>
	| ReturnType<typeof signUpStatusAC>


type InitialStateType = {
	isRegistration: boolean
	registrationError: null | string
	status: RequestStatusType
}