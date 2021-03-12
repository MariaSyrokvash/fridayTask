import {Dispatch} from 'redux';
import {RequestErrorType, RequestStatusType} from './app-reducer';
import {packsAPI} from '../../dal/Packs';
import {ThunkAction} from 'redux-thunk';
import {AppRootState} from '../store';
import {toast} from 'react-hot-toast';

enum PACKS {
	SET_PACKS = 'SET_PACKS',
	SET_PACKS_TOTAL_COUNT = 'SET_PACKS_TOTAL_COUNT',
	SET_STATUS_PACKS = 'SET_STATUS_PACKS',
	SET_ERROR_PACKS = 'SET_ERROR_PACKS',
	SET_SEARCH_PACKS_NAME = 'SET_SEARCH_PACKS_NAME',
	SET_MIN_MAX_PRICE_RANGE = 'SET_MIN_MAX_PRICE_RANGE',
	SET_PACK_CARDS_ID = 'SET_PACK_CARDS_ID',
	SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
	SET_PACK_USER_ID = 'SET_PACK_USER_ID',
}

const initialState: initialStateType = {
	error: null,
	status: 'idle',
	packs: [],
	searchName: '',
	min: 0,
	max: 24,
	sortPacks: '',
	page: 1,
	packsPerPage: 10,
	currentPage: 1,
	cardPacksTotalCount: 0,
	minCardsCount: 0,
	maxCardsCount: 24,
	packCardsId: '',
	packUserId: '',
}

console.log(initialState.packCardsId)

export const packsReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
	switch (action.type) {
		case PACKS.SET_PACKS:
			return {
				...state,
				packs: action.packs
			}
		case PACKS.SET_ERROR_PACKS:
			return {
				...state,
				error: action.error
			}
		case PACKS.SET_PACKS_TOTAL_COUNT:
			return {
				...state,
				cardPacksTotalCount: action.count
			}
		case PACKS.SET_SEARCH_PACKS_NAME:
			return {
				...state,
				searchName: action.searchName
			}
		case PACKS.SET_MIN_MAX_PRICE_RANGE: {
			return {
				...state,
				min: action.min,
				max: action.max
			}
		}
		case PACKS.SET_PACK_CARDS_ID: {
			return {
				...state,
				packCardsId: action.packId
			}
		}
		case PACKS.SET_CURRENT_PAGE: {
			return {
				...state,
				page: action.value
			}
		}
		case PACKS.SET_PACK_USER_ID: {
			return {
				...state,
				packUserId: action.userId
			}
		}
		case PACKS.SET_STATUS_PACKS: {
			return {
				...state,
				status: action.status
			}
		}
		default:
			return state
	}
}

//actions
export const setPacksAC = (packs: Array<PackType>) => ({type: PACKS.SET_PACKS, packs} as const)
export const setPacksStatusAC = (status: RequestStatusType) => ({type: PACKS.SET_STATUS_PACKS, status} as const)
export const setPacksErrorAC = (error: RequestErrorType) => ({type: PACKS.SET_ERROR_PACKS, error} as const)
export const setPacksTotalCountAC = (count: number) => ({type: PACKS.SET_PACKS_TOTAL_COUNT, count} as const)
export const setSearchNamePacksAC = (searchName: string) => ({type: PACKS.SET_SEARCH_PACKS_NAME, searchName} as const)
export const setMinMaxPriceRangeAC = (min: number, max: number) => ({
	type: PACKS.SET_MIN_MAX_PRICE_RANGE,
	min,
	max
} as const)
export const setPackCardsIdAC = (packId: string) => ({type: PACKS.SET_PACK_CARDS_ID, packId} as const)
export const setPackUserIdAC = (userId: string) => ({type: PACKS.SET_PACK_USER_ID, userId} as const)
export const setCurrentPageAC = (value: number) => ({type: PACKS.SET_CURRENT_PAGE, value} as const)

//thunks
export const getPacksTC = (): ThunkType => (dispatch, getState) => {
	dispatch(setPacksStatusAC('loading'))

	const state = getState()
	const searchName = state.packs.searchName
	const min = state.packs.min
	const max = state.packs.max
	const sortPacks = state.packs.sortPacks
	const currentPage = state.packs.page
	const packsOnPage = state.packs.packsPerPage
	const myId = state.profile.myId

	packsAPI.getPacksData(searchName, min, max, sortPacks, currentPage, packsOnPage, myId)
		.then((res) => {
			console.log(res.cardPacks)
			dispatch(setPacksAC(res.cardPacks))
			dispatch(setPacksTotalCountAC(res.cardPacksTotalCount))
		})
		.catch(e => {
			const error = e.response
				? e.response.data.error
				: (e.message + ', more details in the console');
			dispatch(setPacksErrorAC(error))
			toast.error(error)
		})
		.finally(() => {
			dispatch(setPacksStatusAC('succeeded'))
		})
}

export const deletePackTC = (idPack: string | null): ThunkType => (dispatch) => {
	dispatch(setPacksStatusAC('loading'))
	packsAPI.deletePack(idPack)
		.then(response => {
			dispatch(getPacksTC())
		})
		.catch((err) => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			console.log(error)
			toast.error(error)
		})
		.finally(() => {
			dispatch(setPacksStatusAC('succeeded'))
		})
}

export const updatePackTС = (packId: string, name: string): ThunkType => (dispatch, getState) => {
	dispatch(setPacksStatusAC('loading'))
	const newPack = {
		_id: packId,
		name: name
	}

	packsAPI.updatePack(newPack)
		.then(() => {
			dispatch(getPacksTC())
		})
		.catch(err => {
			console.log(err)
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			console.log(error)
			toast.error(error)
		})
		.finally(() => {
			dispatch(setPacksStatusAC('succeeded'))
		})
}

export const addPackTC = (name: string): ThunkType => (dispatch, getState) => {
	dispatch(setPacksStatusAC('loading'))

	const newCard = {
		name: name,
		// path: 'string',
		// grade: 0,
		// shots: 0,
		// rating: 0,
		// deckCover: 'string',
		// private: false,
		// type: 'string'
	}
	packsAPI.addNewPack(newCard)
		.then(response => {
			console.log(response)
			dispatch(getPacksTC())
		})
		.catch((err) => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			console.log(error)
			toast.error(error)
		})
		.finally(() => {
			dispatch(setPacksStatusAC('succeeded'))
		})
}

type ActionsType =
	ReturnType<typeof setPacksAC>
	| ReturnType<typeof setPacksStatusAC>
	| ReturnType<typeof setPacksErrorAC>
	| ReturnType<typeof setPacksTotalCountAC>
	| ReturnType<typeof setSearchNamePacksAC>
	| ReturnType<typeof setMinMaxPriceRangeAC>
	| ReturnType<typeof setPackCardsIdAC>
	| ReturnType<typeof setCurrentPageAC>
	| ReturnType<typeof setPackUserIdAC>

export type PackType = {
	cardsCount: number | null
	created: Date | null
	deckCover: string | null
	grade: number | null
	more_id: string | null
	name: string | null
	path: string | null
	private: boolean
	rating: number | null
	shots: number | null
	type: string | null
	updated: Date | null
	user_id: string | null
	user_name: string | null
	__v: number | null
	_id: string
}

type initialStateType = {
	error: RequestErrorType
	status: RequestStatusType
	packs: Array<PackType>
	searchName: string
	min: number
	max: number
	sortPacks: string
	page: number
	packsPerPage: number
	currentPage: number
	cardPacksTotalCount: number
	minCardsCount: number
	maxCardsCount: number
	packCardsId: string
	packUserId: string
}


export type ThunkType = ThunkAction<void, AppRootState, Dispatch<ActionsType>, ActionsType>