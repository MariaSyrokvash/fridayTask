import {Dispatch} from 'redux';
import {newPasswordAPI} from '../../dal/NewPasswordAPI';
import {toast} from 'react-hot-toast';


enum NEW_PASS {
	SET_ERROR = 'SET_ERROR',
	SET_SUCCESS = 'SET_SUCCESS',
	SET_STATUS = 'SET_STATUS'
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

type InitialStateType = {
	status: RequestStatusType
	error: string
	successMessage: string
}

const initialState: InitialStateType = {
	status: 'idle',
	error: '',
	successMessage: ''
}

export const newPasswordReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case NEW_PASS.SET_ERROR:
			return {
				...state,
				error: action.error
			}
		case NEW_PASS.SET_STATUS:
			return {
				...state,
				status: action.status
			}
		case NEW_PASS.SET_SUCCESS:
			return {
				...state,
				successMessage: action.success
			}
		default:
			return state
	}
}

// actions
export const setErrorAC = (error: string) => ({type: NEW_PASS.SET_ERROR, error} as const)
export const setSuccessAC = (success: string) => ({type: NEW_PASS.SET_SUCCESS, success} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: NEW_PASS.SET_STATUS, status} as const)


//thunks
export const sendNewPasswordTC = (newPassword: string, token: string) => (dispatch: Dispatch) => {
	dispatch(setAppStatusAC('loading'))
	newPasswordAPI.sendNewPassword(newPassword, token)
		.then(res => {
			dispatch(setSuccessAC(res.data.message))
			toast.success(res.data.message);
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console')
			dispatch(setErrorAC(error))
			toast.error(error);
		})
		.finally(() => {
			dispatch(setAppStatusAC('succeeded'))
		})
}


type ActionsType = ReturnType<typeof setErrorAC>
	| ReturnType<typeof setSuccessAC>
	| ReturnType<typeof setAppStatusAC>
