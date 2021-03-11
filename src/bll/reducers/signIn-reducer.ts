import {Dispatch} from 'redux'
import {RequestStatusType, setAppInitialedAC, setAppStatusAC} from './app-reducer';
import {authAPI, LoginParamsType} from '../../dal/LoginAPI';
import {setIdProfileAC, setUserProfileAC} from './profile-reducer';
import {toast} from 'react-hot-toast';


enum LOGIN {
	SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN',
	SIGN_IN_ERROR = 'SIGN_IN_ERROR',
	SET_STATUS_LOGOUT = 'SET_STATUS_LOGOUT',
	SET_STATUS_LOGIN = 'SET_STATUS_LOGIN'
}

const initialState: InitialStateType = {
	isLoggedIn: false,
	loginError: null,
	logoutStatus: 'idle',
	loginStatus: 'idle'
}

export const signInReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case LOGIN.SET_IS_LOGGED_IN:
			return {
				...state,
				isLoggedIn: action.value
			}
		case LOGIN.SIGN_IN_ERROR:
			return {
				...state,
				loginError: action.error
			}
		case LOGIN.SET_STATUS_LOGOUT:
			return {
				...state,
				logoutStatus: action.status
			}
		case LOGIN.SET_STATUS_LOGIN:
			return {
				...state,
				loginStatus: action.status
			}
		default:
			return state
	}
}

// actions
export const setIsLoggedInAC = (value: boolean) => ({type: LOGIN.SET_IS_LOGGED_IN, value} as const)
export const signInErrorAC = (error: string) => ({type: LOGIN.SIGN_IN_ERROR, error} as const)
export const setLogoutStatusAC = (status: RequestStatusType) => ({type: LOGIN.SET_STATUS_LOGOUT, status} as const)
export const setLoginStatusAC = (status: RequestStatusType) => ({type: LOGIN.SET_STATUS_LOGIN, status} as const)

//thunks
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
	dispatch(setLogoutStatusAC('loading'))
	authAPI.login(data)
		.then(res => {
			// dispatch(setAppInitialedAC())
			dispatch(setIsLoggedInAC(true))
			dispatch(setUserProfileAC(res.data))
			dispatch(setIdProfileAC(res.data._id))
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			dispatch(signInErrorAC(error))
			toast.error(error);
		})
		.finally(() => {
			dispatch(setLogoutStatusAC('succeeded'))
		})
}


export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
	dispatch(setAppStatusAC('loading'))

	authAPI.logout()
		.then(() => {
			dispatch(setIsLoggedInAC(false))
			// dispatch(setAppInitialedAC())
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			toast.error(error);
		})
		.finally(() => {
			dispatch(setAppStatusAC('succeeded'))
		})
}


type InitialStateType = {
	isLoggedIn: boolean
	loginError: null | string
	logoutStatus: RequestStatusType
	loginStatus: RequestStatusType
}


type ActionsType =
	ReturnType<typeof setIsLoggedInAC>
	| ReturnType<typeof setUserProfileAC>
	| ReturnType<typeof setAppStatusAC>
	| ReturnType<typeof signInErrorAC>
	| ReturnType<typeof setIdProfileAC>
	| ReturnType<typeof setAppInitialedAC>
	| ReturnType<typeof setLogoutStatusAC>
	| ReturnType<typeof setLoginStatusAC>

