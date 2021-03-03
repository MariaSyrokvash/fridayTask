import {Dispatch} from 'redux'
import {setAppStatusAC} from './app-reducer';
import {authAPI, LoginParamsType} from '../../dal/LoginAPI';
import {ThunkAction} from 'redux-thunk';
import {AppRootState} from '../store';


enum LOGIN {
	SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN',
	SET_USER_PROFILE = 'SET_USER_PROFILE',
	SIGN_IN_ERROR = 'SIGN_IN_ERROR'
}

const initialState: InitialStateType = {
	isLoggedIn: false,
	profile: {
		_id: null,
		email: null,
		name: null,
		avatar: null,
		publicCardPacksCount: null,
		created: null,
		updated: null,
		isAdmin: null,
		verified: null,
		rememberMe: null,
		error: null
	},
	loginError: null
}

console.log(initialState, 'initialState')

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case LOGIN.SET_IS_LOGGED_IN:
			return {
				...state,
				isLoggedIn: action.value
			}
		case LOGIN.SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		case LOGIN.SIGN_IN_ERROR:
			return {
				...state,
				loginError: action.error
			}
		default:
			return state
	}
}

// actions
export const setIsLoggedInAC = (value: boolean) => ({type: LOGIN.SET_IS_LOGGED_IN, value} as const)
export const setUserProfileAC = (profile: ProfileType) => ({type: LOGIN.SET_USER_PROFILE, profile} as const)
export const signInErrorAC = (error: string) => ({type: LOGIN.SIGN_IN_ERROR, error} as const)


//thunks
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
	dispatch(setAppStatusAC('loading'))

	authAPI.login(data)
		.then(res => {
			dispatch(setIsLoggedInAC(true))
			dispatch(setUserProfileAC(res.data))
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			dispatch(signInErrorAC(error))
		})
		.finally(() => {
			dispatch(setAppStatusAC('succeeded'))
		})
}

export const authMeTC = (): AuthMeThunkType => (dispatch) => {
	return authAPI.authMe()
		.then(res => {
			console.log(res)
		})
}

export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {

}



type InitialStateType = {
	isLoggedIn: boolean
	profile: ProfileType
	loginError: null | string
}

export type ProfileType = {
	_id: string | null
	email: string | null
	name: string | null
	avatar: string | null
	publicCardPacksCount: number | null
	created: string | null
	updated: string | null
	isAdmin: boolean | null
	verified: boolean | null
	rememberMe: boolean | null
	error: string | null
}

type ActionsType =
	ReturnType<typeof setIsLoggedInAC>
	| ReturnType<typeof setUserProfileAC>
	| ReturnType<typeof setAppStatusAC>
	| ReturnType<typeof signInErrorAC>

type AuthMeThunkType = ThunkAction<Promise<void>, AppRootState, Dispatch<ActionsType>, ActionsType>