import {setIsLoggedInAC} from './signIn-reducer';
import {Dispatch} from 'redux';
import {authAPI} from '../../dal/LoginAPI';
import {ThunkAction} from 'redux-thunk';
import {AppRootState} from '../store';
import {RequestErrorType, RequestStatusType} from './app-reducer';
import {toast} from 'react-hot-toast';


enum PROFILE {
	SET_USER_PROFILE = 'SET_USER_PROFILE',
	SET_MY_ID = 'SET_MY_ID',
	SET_ERROR = 'SET_ERROR',
	SET_NEW_USER_NAME = 'SET_NEW_USER_NAME',
	SET_NEW_USER_AVATAR = 'SET_NEW_USER_AVATAR',
	SET_STATUS = 'SET_STATUS',
}

const initialState: ProfileInitialStateType = {
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
	myId: null,
	error: null,
	status: 'idle'
}

export const profileReducer = (state: ProfileInitialStateType = initialState, action: ActionsType): ProfileInitialStateType => {
	switch (action.type) {
		case PROFILE.SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		case PROFILE.SET_MY_ID: {
			return {
				...state,
				myId: action.myId
			}
		}
		case PROFILE.SET_ERROR: {
			return {
				...state,
					error: action.error
			}
		}
		case PROFILE.SET_NEW_USER_AVATAR: {
				return {
					...state,
					profile: {
						...state.profile,
						avatar: action.avatar
					}
				}
		}
		case PROFILE.SET_NEW_USER_NAME: {
			return {
				...state,
				profile: {
					...state.profile,
					name: action.name
				}
			}
		}
		case PROFILE.SET_STATUS:
			return {...state, status: action.status}
		default:
			return state
	}
}

// actions
export const setUserProfileAC = (profile: ProfileType) => ({type: PROFILE.SET_USER_PROFILE, profile} as const)
export const setIdProfileAC = (myId: string | null) => ({type: PROFILE.SET_MY_ID, myId} as const)
export const setErrorAC = (error: RequestErrorType) => ({type: PROFILE.SET_ERROR, error} as const)
export const setUserProfileNameAC = (name: string | null | any) => ({type: PROFILE.SET_NEW_USER_NAME, name} as const)
export const setUserProfileAvatarAC = (avatar: string | null | any) => ({type: PROFILE.SET_NEW_USER_AVATAR, avatar} as const)
export const setProfileStatusAC = (status: RequestStatusType) => ({type: PROFILE.SET_STATUS, status} as const)

//thunks
export const authMeTC = (): AuthMeThunkType => (dispatch) => {
	return authAPI.authMe()
		.then(res => {
			if (res.status === 200) {
				dispatch(setIsLoggedInAC(true))
				dispatch(setUserProfileAC(res.data))
				dispatch(setIdProfileAC(res.data._id))
			}
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			toast.error(error)
			dispatch(setErrorAC(error))
		})
}

export const uploadUserProfileTC = () => (dispatch: Dispatch, getState: any) => {
	dispatch(setProfileStatusAC('loading'))
	const state = getState()
	const userAvatar = state.profile.profile.avatar
	const userName = state.profile.profile.name

	return authAPI.updateMe(userName, userAvatar)
		.then(res => {
			dispatch(setUserProfileAvatarAC(res.data.updatedUser.avatar))
			dispatch(setUserProfileNameAC(res.data.updatedUser.name))
			if (res.status === 200) {
				toast.success('Success!', {
					duration: 1000,
					icon: '👏',
				});
			}
	})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			toast.error(error)
		})
		.finally(() => {
			dispatch(setProfileStatusAC('succeeded'))
		})
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

export type ProfileInitialStateType = {
	profile: ProfileType
	myId: string | null
	error: RequestErrorType
	status: RequestStatusType
}

type ActionsType = ReturnType<typeof setIdProfileAC>
	| ReturnType<typeof setIsLoggedInAC>
	| ReturnType<typeof setUserProfileAC>
	| ReturnType<typeof setErrorAC>
	| ReturnType<typeof setUserProfileAvatarAC>
	| ReturnType<typeof setUserProfileNameAC>
	| ReturnType<typeof setProfileStatusAC>

type AuthMeThunkType = ThunkAction<Promise<void>, AppRootState, Dispatch<ActionsType>, ActionsType>
