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
	SET_GRADE_CARD = 'SET_GRADE_CARD',
	SET_CARD_ID = 'SET_CARD_ID',
	SET_TRAIN_STATUS = 'SET_TRAIN_STATUS'
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
	__v: number | null
	_id: string
}

type initialStateType = {
	cards: Array<CardType>
	error: string
	status: RequestStatusType
	trainStatus: RequestStatusType
	emptyCardMessage: string
	cardId: string
}
const initialState: initialStateType = {
	cards: [],
	error: '',
	status: 'idle',
	trainStatus: 'idle',
	emptyCardMessage: '',
	cardId: ''
}

export const cardsReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
	switch (action.type) {
		case CARDS.SET_CARDS: {
			return {
				...state,
				cards: action.cards
			}
		}
		case  CARDS.SET_CARDS_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		case  CARDS.SET_TRAIN_STATUS: {
			return {
				...state,
				trainStatus: action.status
			}
		}
		case CARDS.SET_GRADE_CARD: {
			return {
				...state,
				cards: state.cards.map(card => {
					if (card._id === action.id) {
						return {
							...card,
							grade: action.grade,
							shots: action.shots
						}
					} else {
						return card
					}
				})
			}
		}
		case CARDS.SET_CARD_ID: {
			return {
				...state,
				cardId: action.id
			}
		}
		default:
			return state
	}
}


export const setCardsAC = (cards: Array<CardType>) => ({type: CARDS.SET_CARDS, cards} as const)
export const setCardsStatusAC = (status: RequestStatusType) => ({type: CARDS.SET_CARDS_STATUS, status} as const)
export const setTrainStatusAC = (status: RequestStatusType) => ({type: CARDS.SET_TRAIN_STATUS, status} as const)
export const updateGradeAC = (grade: number, shots: number, id: string) => ({
	type: CARDS.SET_GRADE_CARD,
	grade,
	shots,
	id
} as const)
export const setCardIdAC = (id: string) => ({type: CARDS.SET_CARD_ID, id} as const)


export const getCardsTC = (cardsPack_id: string): ThunkType => (dispatch, getState) => {
	dispatch(setCardsStatusAC('loading'))

	cardsAPI.getCardsData(cardsPack_id)
		.then(res => {
			dispatch(setPackUserIdAC(res.packUserId))
			dispatch(setPackCardsIdAC(cardsPack_id))
			dispatch(setCardsAC(res.cards))

		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			toast.error(error,{
				duration: 2000
			});
		})
		.finally(() => {
			dispatch(setCardsStatusAC('succeeded'))
		})
}

export const addCardTC = (cardsPack_id: string, question?: string, answer?: string): ThunkType => (dispatch, getState) => {
	dispatch(setCardsStatusAC('loading'))
	const newCard = {
		cardsPack_id: cardsPack_id,
		question: question,
		answer: answer
	}
	cardsAPI.addNewCard(newCard)
		.then(() => {
			dispatch(getCardsTC(cardsPack_id))
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			toast.error(error,{
				duration: 2000
			});
		})
		.finally(() => {
			dispatch(setCardsStatusAC('succeeded'))
		})
}

export const updateCardTC = (packId: string, cardId: string, value: string, value2: string): ThunkType => (dispatch, getState) => {
	dispatch(setCardsStatusAC('loading'))
	const updateCard = {
		_id: cardId,
		question: value,
		answer: value2
	}
	cardsAPI.updateCard(updateCard)
		.then(res => {
			dispatch(getCardsTC(packId))
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			toast.error(error,{
				duration: 2000
			});
		})
		.finally(() => {
			dispatch(setCardsStatusAC('succeeded'))
		})
}


export const deleteCardTC = (packId: string, cardsPack_id: string): ThunkType => (dispatch, getState) => {
	dispatch(setCardsStatusAC('loading'))
	cardsAPI.deleteCard(cardsPack_id)
		.then((res) => {
			dispatch(getCardsTC(packId))
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			toast.error(error,{
				duration: 2000
			});
		})
		.finally(() => {
			dispatch(setCardsStatusAC('succeeded'))
		})
}

export const updateGradeTC = (cardId: string, grade: number): ThunkType => (dispatch) => {
	dispatch(setTrainStatusAC('loading'))
	return cardsAPI.updateGradeCard(grade, cardId)
		.then(res => {
			dispatch(updateGradeAC(res.updatedGrade.grade, res.updatedGrade.shots, res.updatedGrade.card_id))
			toast.success('Thank you for rating!', {
				duration: 1000,
				icon: '👏',
			});
		})
		.catch(e => {
			const error = e.response
				? e.response.data.error
				: (e.message + ', more details in the console');
			toast.error(error, {
				duration: 3000
			});
		})
		.finally(() => {
			dispatch(setTrainStatusAC('succeeded'))
		})
}

type ActionsType =
	| ReturnType<typeof setCardsAC>
	| ReturnType<typeof setPackCardsIdAC>
	| ReturnType<typeof setCardsStatusAC>
	| ReturnType<typeof setPackUserIdAC>
	| ReturnType<typeof updateGradeAC>
	| ReturnType<typeof setCardIdAC>
	| ReturnType<typeof setTrainStatusAC>
	| any

export type ThunkType = ThunkAction<void, AppRootState, Dispatch<ActionsType>, ActionsType>

