import {Dispatch} from 'redux';
import {RequestErrorType, RequestStatusType} from './app-reducer';
import {packsAPI} from '../../dal/Packs';
import {ThunkAction} from 'redux-thunk';
import {AppRootState} from '../store';

enum PACKS {
	SET_PACKS = 'SET_PACKS',
	SET_STATUS_PACKS = 'SET_STATUS_PACKS',
	SET_ERROR_PACKS = 'SET_ERROR_PACKS'
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
	totalPacksCount: 0,
	minCardsCount: 0,
	maxCardsCount: 24,
}


export const packsReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
	switch (action.type) {
		case PACKS.SET_PACKS:
			return {
				...state,
				packs: action.packs
			}

		default:
			return state
	}
}

//actions
export const setPacksAC = (packs: Array<PackType>) => ({type: PACKS.SET_PACKS, packs} as const)
export const setPacksStatusAC = (status: RequestStatusType) => ({type: PACKS.SET_STATUS_PACKS, status} as const)
export const setPacksErrorAC = (error: RequestErrorType) => ({type: PACKS.SET_ERROR_PACKS, error} as const)

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
			console.log(res)
		})
		.catch(e => {
			const error = e.response
				? e.response.data.error
				: (e.message + ', more details in the console');
		})
		.finally(() => {
			dispatch(setPacksStatusAC('succeeded'))
		})
}

type ActionsType =
	ReturnType<typeof setPacksAC>
	| ReturnType<typeof setPacksStatusAC>
	| ReturnType<typeof setPacksErrorAC>

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
	totalPacksCount: number
	minCardsCount: number
	maxCardsCount: number
}


export type ThunkType = ThunkAction<void, AppRootState, Dispatch<ActionsType>, ActionsType>