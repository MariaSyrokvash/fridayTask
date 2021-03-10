import {Dispatch} from 'redux';
import {passwordRecoveryAPI} from '../../dal/PasswordRecoveryAPI';
import {toast} from 'react-hot-toast';

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
export const setRecoveryStatusAC = (status: RequestStatusType) => ({type: RECOVERY.SET_STATUS, status} as const)

//thunks
export const sendEmailTC = (email: string) => (dispatch: Dispatch) => {
	dispatch(setRecoveryStatusAC('loading'))
	return passwordRecoveryAPI.sendEmail(email)
		.then(res => {
			if (res.status === 200) {
				dispatch(setSuccessAC(res.data.info))
				toast.success(res.data.info);
			}
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console')
			dispatch(setErrorAC(error))
			toast.error(error);
		})
		.finally(() => {
			dispatch(setRecoveryStatusAC('succeeded'))
		})
}



type ActionsType = ReturnType<typeof setErrorAC>
	| ReturnType<typeof setSuccessAC>
	| ReturnType<typeof setRecoveryStatusAC>