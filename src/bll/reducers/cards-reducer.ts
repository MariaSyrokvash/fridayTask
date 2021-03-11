import {ThunkAction} from 'redux-thunk';
import {Dispatch} from 'redux';
import {AppRootState} from '../store';
import {cardsAPI} from '../../dal/CardsAPI';
import {setPackCardsIdAC, setPackUserIdAC} from './packs-reducer';
import {RequestStatusType} from './app-reducer';
import {toast} from 'react-hot-toast';


enum CARDS {
	SET_CARDS = 'SET_CARDS',
	SET_CARDS_ERROR = 'SET_CARDS_ERROR',
	SET_CARDS_STATUS = 'SET_CARDS_STATUS',
}

export type CardType = {
	answer: string | null
	question: string | null
	cardsPack_id: string | null
	grade: number
	rating: number | null
	shots: number
	type: string | null
	user_id: string | null
	created: string | null
	updated: string | null
	more_id: string | null
	__v: number | null
	_id: string
}


type initialStateType = {
	cards: Array<CardType>
	error: string
	status: RequestStatusType
	emptyCardMessage: string
}
const initialState: initialStateType = {
	cards: [],
	error: '',
	status: 'idle',
	emptyCardMessage: ''
}

export const cardsReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
	switch (action.type) {
		case CARDS.SET_CARDS: {
			return {
				...state,
				cards: action.cards
			}
		}
		// case CARDS.SET_CARDS_ERROR: {
		// 	return {
		// 		...state,
		// 		error: action.error
		// 	}
		// }
		case	CARDS.SET_CARDS_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		default:
			return state
	}
}


export const setCardsAC = (cards: Array<CardType>) => ({type: CARDS.SET_CARDS, cards} as const)
// export const setCardsErrorAC = (error: string) => ({type: CARDS.SET_CARDS_ERROR, error} as const)
export const setCardsStatusAC = (status: RequestStatusType) => ({type: CARDS.SET_CARDS_STATUS, status} as const)


export const getCardsTC = (): ThunkType => (dispatch, getState) => {
	dispatch(setCardsStatusAC('loading'))

	const state = getState()
	const packId = state.packs.packCardsId
	console.log(packId)

	cardsAPI.getCardsData(packId)
		.then(res => {
			console.log(res)
			dispatch(setPackUserIdAC(res.packUserId))
			dispatch(setPackCardsIdAC(packId))
			dispatch(setCardsAC(res.cards))

		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			// dispatch(setCardsErrorAC(error))
			console.log(error)
			toast.error(error);
		})
		.finally(() => {
			dispatch(setCardsStatusAC('succeeded'))
		})
}

export const addCardTC = (cardsPack_id: string, question?: string, answer?: string): ThunkType => (dispatch, getState) => {
	const newCard = {
		cardsPack_id: cardsPack_id,
		question: question,
		answer: answer
	}
	cardsAPI.addNewCard(newCard)
		.then(() => {
			dispatch(getCardsTC())
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			console.log(error)
			toast.error(error);
		})
}

export const updateCardTC = (cardId: string, value: string, value2: string): ThunkType => (dispatch, getState) => {
	const updateCard = {
		_id: cardId,
		question: value,
		answer: value2
	}
	cardsAPI.updateCard(updateCard)
		.then(res => {
			dispatch(getCardsTC())
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			console.log(error)
			toast.error(error);
		})
}


export const deleteCardTC = (cardsPack_id: string): ThunkType => (dispatch, getState) => {

	cardsAPI.deleteCard(cardsPack_id)
		.then((res) => {
			dispatch(getCardsTC())
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			console.log(error)
			toast.error(error);
		})
}

type ActionsType =
	| ReturnType<typeof setCardsAC>
	// | ReturnType<typeof setCardsErrorAC>
	| ReturnType<typeof setPackCardsIdAC>
	| ReturnType<typeof setCardsStatusAC>
	| ReturnType<typeof setPackUserIdAC>
	| any

export type ThunkType = ThunkAction<void, AppRootState, Dispatch<ActionsType>, ActionsType>

