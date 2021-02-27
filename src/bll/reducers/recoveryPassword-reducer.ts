import {Dispatch} from 'redux';
import {passwordRecoveryAPI} from '../../dal/PasswordRecoveryAPI';
import {authAPI, LoginParamsType} from '../../dal/LoginAPI';
import {setIsLoggedInAC, setUserProfileAC, signInErrorAC} from './login-reducer';

enum RECOVERY {
	SET_ERROR = 'SET_ERROR',
	SET_SUCCESS = 'SET_SUCCESS',
	SET_STATUS = 'SET_STATUS'
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

type InitialStateType = {
	status: RequestStatusType
	recoveryError: string | null
	recoverySuccess: string
}

const initialState: InitialStateType = {
	status: 'idle',
	recoveryError: '',
	recoverySuccess: ''
}

export const recoveryPasswordReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case RECOVERY.SET_STATUS:
			return {
				...state,
				status: action.status
			}
		case RECOVERY.SET_ERROR:
			return {
				...state,
				recoveryError: action.error
			}
		case RECOVERY.SET_SUCCESS:
			return {
				...state,
				recoverySuccess: action.recoverySuccess
			}
		default:
			return state
	}
}

// actions
export const setErrorAC = (error: string) => ({type: RECOVERY.SET_ERROR, error} as const)
export const setSuccessAC = (recoverySuccess: string) => ({type: RECOVERY.SET_SUCCESS, recoverySuccess} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: RECOVERY.SET_STATUS, status} as const)

//thunks
export const sendEmailTC = (email: string) => (dispatch: Dispatch) => {
	debugger
	dispatch(setAppStatusAC('loading'))
	passwordRecoveryAPI.sendEmail(email)
		.then(res => {
			console.log(res.data)
			if (res.status === 200) {
				dispatch(setSuccessAC(res.data.info))
			}
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console')
			dispatch(setErrorAC(error))
		})
		.finally(() => {
			dispatch(setAppStatusAC('succeeded'))
		})
}



type ActionsType = ReturnType<typeof setErrorAC>
	| ReturnType<typeof setSuccessAC>
	| ReturnType<typeof setAppStatusAC>