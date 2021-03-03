import {Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {AppRootState} from '../store';
import {authMeTC} from './profile-reducer';


enum APP {
	SET_STATUS = 'SET-STATUS',
	SET_ERROR = 'SET_ERROR',
	SET_INITIALIZED = 'SET_INITIALIZED'
}

const initialState: InitialStateType = {
	status: 'idle',
	error: null,
	initialized: false
}

type InitialStateType = {
	status: RequestStatusType,
	error: RequestErrorType,
	initialized: boolean
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case APP.SET_STATUS:
			return {...state, status: action.status}
		case APP.SET_ERROR:
			return {...state, error: action.error}
		case APP.SET_INITIALIZED:
			return {...state, initialized: true}
		default:
			return state
	}
}

//actions
export const setAppStatusAC = (status: RequestStatusType) => ({type: APP.SET_STATUS, status} as const)
export const setAppErrorAC = (error: RequestErrorType) => ({type: APP.SET_ERROR, error} as const)
export const setAppInitialedAC = () => ({type: APP.SET_INITIALIZED} as const)

//thunks
export const initializeAppTC = (): ThunkType => (dispatch: Dispatch<ActionsType>) => {
	const promise = dispatch(authMeTC())

	Promise.all([promise]).then(() => {
			dispatch(setAppInitialedAC())
	})
}


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type RequestErrorType = string | null


type ActionsType = ReturnType<typeof setAppStatusAC>
	| ReturnType<typeof setAppErrorAC>
	| ReturnType<typeof setAppInitialedAC>
	| any

type ThunkType = ThunkAction<void, AppRootState, Dispatch<ActionsType>, ActionsType>
