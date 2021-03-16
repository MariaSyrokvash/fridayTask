import React, {FC, useState} from 'react';
import {Table} from '../../06_common/c11-Table/Table';
import {addCardTC, CardType, deleteCardTC, setCardsAC, updateCardTC} from '../../../bll/reducers/cards-reducer';
import s from './Cards.module.scss';
import {NavLink, Route, useHistory} from 'react-router-dom';
import {PATH} from '../../05_routes/Routes';
import {RequestStatusType} from '../../../bll/reducers/app-reducer';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../06_common/c5-Loader/Loader';
import SuperButton from '../../06_common/c2-SuperButton/SuperButton';
import {AppRootState} from '../../../bll/store';
import {ModalConfirm} from '../../06_common/c6-ModalForm/ModalBase/ModalConfirm/ModalConfirm';
import {ModalCard} from '../../06_common/c6-ModalForm/ModalBase/ModalCard/ModalCard';
import {Toaster} from 'react-hot-toast';

type CardsPropsType = {
	tableHeader: Array<string>
	cards: Array<CardType>
	status: RequestStatusType
	theme?: string
}
export const Cards: FC<CardsPropsType> = ({tableHeader, cards, status}) => {
	const packUserId = useSelector<AppRootState, string>(state => state.packs.packUserId)
	const myId = useSelector<AppRootState, string | null>(state => state.profile.profile._id)
	const cardsPackId =  useSelector<AppRootState, string>(state => state.packs.packCardsId)
	const dispatch = useDispatch()
	const history = useHistory()
	const [addValue, setAddValue] = useState<string>('')
	const [addValue2, setAddValue2] = useState<string>('')
	const [updateValue, setUpdateValue] = useState<string>('')
	const [updateValue2, setUpdateValue2] = useState<string>('')

	const closeModal = () => history.push(PATH.CARDS + `/${cardsPackId}`)

	const resetCards = () => {dispatch(setCardsAC([]))}

	const confirmRemoveCard = (cardId: string) => {
		dispatch(deleteCardTC(cardId))
		closeModal()
	}

	const onChangeTextAddHandlerFirst = (value: string) => {setAddValue(value)}
	const onChangeTextAddHandlerSecond = (value: string) => {setAddValue2(value)}

	const onChangeTextUpdateHandlerFirst = (value: string) => {setUpdateValue(value)}
	const onChangeTextUpdateHandlerSecond = (value: string) => {setUpdateValue2(value)}

	const updateCard = (cardId: string, value: string, value2: string) => {
			dispatch(updateCardTC(cardId, value, value2))
			closeModal()
			setUpdateValue('')
			setUpdateValue2('')
	}

	const addNewCardHandler = () => {
		dispatch(addCardTC(cardsPackId, addValue, addValue2))
		closeModal()
		setAddValue('')
		setAddValue2('')
	}

	const closeUpdateModal = () => {
		closeModal()
		setAddValue('')
		setAddValue2('')
	}

	return (
		<div className={s.cardBox}>
			{status === 'loading' ? <Loader/> : null}
			<Toaster />
			<NavLink to={PATH.PACKS} className={s.backLink}>
				<SuperButton className={`${s.btn} ${s.backBtn}`} disabled={status === 'loading'} onClick={resetCards}>Packs</SuperButton>
			</NavLink>
			<h2>Cards</h2>
			<NavLink to={PATH.CARDS + '/add/' + cardsPackId} className={s.addCardLink}>
				<SuperButton className={`${s.btn} ${s.addCardBtn}`}  disabled={myId !== packUserId || status === 'loading'}>Add card</SuperButton>
			</NavLink>

			<Table headerElement={tableHeader} cards={cards}/>


			<Route path={PATH.CARDS + '/delete/:cardId'}
						 render={() => <ModalConfirm confirmHandler={confirmRemoveCard} cancelHandler={closeModal}
																				 title='Are you sure you want to delete this card?'/>}/>
			<Route path={PATH.CARDS + '/update/:cardId'}
						 render={() => <ModalCard onChangeTextFirst={onChangeTextUpdateHandlerFirst}
																			onChangeTextSecond={onChangeTextUpdateHandlerSecond} closeModal={closeUpdateModal}
																			inputFirst={updateValue} inputSecond={updateValue2} addTextHandler={updateCard}
																			title='Please, update this card'/>}/>

			<Route path={PATH.CARDS + '/add/:packId'}
						 render={() => <ModalCard onChangeTextFirst={onChangeTextAddHandlerFirst}
																			onChangeTextSecond={onChangeTextAddHandlerSecond} closeModal={closeModal}
																			inputFirst={addValue} inputSecond={addValue2} addTextHandler={addNewCardHandler}
																			title='Please, enter the name of the card'/>}/>
		</div>
	)
}