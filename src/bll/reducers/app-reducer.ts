import {Dispatch} from 'redux';


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
		// case APP.SET_ERROR:
		// 	return {...state, error: action.error}
		case APP.SET_INITIALIZED:
			return {...state, initialized: action.initialized}
		default:
			return state
	}
}


export const setAppStatusAC = (status: RequestStatusType) => ({type: APP.SET_STATUS, status} as const)
// export const setAppErrorAC = (error: RequestErrorType) => ({type: APP.SET_ERROR, error} as const)
export const setAppInitialedAC = (initialized: boolean) => ({type: APP.SET_INITIALIZED, initialized} as const)


export const initializedSuccessAC = (value: boolean) => {
	return {type: APP.SET_INITIALIZED, value} as const
}

export const initializeAppTC = () => (dispatch: Dispatch<ActionsType>) => {

}


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type RequestErrorType = string | null


type ActionsType = ReturnType<typeof setAppStatusAC>
	// | ReturnType<typeof setAppErrorAC>
	| ReturnType<typeof setAppInitialedAC>
