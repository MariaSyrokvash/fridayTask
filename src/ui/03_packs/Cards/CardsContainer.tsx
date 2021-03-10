import React, {FC} from 'react';
import {Cards} from './Cards';
import {useSelector} from 'react-redux';
import {AppRootState} from '../../../bll/store';
import {CardType} from '../../../bll/reducers/cards-reducer';
import {RequestStatusType} from '../../../bll/reducers/app-reducer';

type CardsContainerPropsType = {
	theme?: string
}

export const CardsContainer:FC<CardsContainerPropsType> = ({theme}) => {
	const headerElement = ['QUESTION', 'ANSWER', 'GRADE', 'ACTIONS']
	const cards = useSelector<AppRootState, Array<CardType>>(state => state.cards.cards)
	const status = useSelector<AppRootState, RequestStatusType>(state => state.cards.status)


	return (
		<Cards tableHeader={headerElement} cards={cards} status={status} theme={theme}/>
	)
}