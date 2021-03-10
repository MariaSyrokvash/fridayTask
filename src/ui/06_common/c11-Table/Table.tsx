import React, {FC} from 'react';
import s from './Table.module.scss'
import {PackType, setPackCardsIdAC} from '../../../bll/reducers/packs-reducer';
import del from './image/delete.svg'
import refresh from './image/refresh.svg'
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../05_routes/Routes';
import {CardType, getCardsTC} from '../../../bll/reducers/cards-reducer';
import {AppRootState} from '../../../bll/store';

type TablePropsType = {
	headerElement: Array<string>
	packs?: Array<PackType>
	cards?: Array<CardType>
}

export const Table: FC<TablePropsType> = ({packs, headerElement, cards}) => {
	const dispatch = useDispatch()
	const myId = useSelector<AppRootState, string | null>(state => state.profile.profile._id)

	const renderHeader = (headerElement: Array<string>, cards?: Array<CardType>) => {
		if (cards && !cards.length) return
		return headerElement.map((key, index) => {
			return <th key={index}>{key.toUpperCase()}</th>
		})
	}


	const goToCardHandler = (packId: string) => {
		dispatch(setPackCardsIdAC(packId))
		dispatch(getCardsTC())
	}


	const renderBodyPacks = (packs: Array<PackType>) => {
		return packs && packs.map(({_id, name, cardsCount, user_name, updated, user_id}) => {
			// const year = updated && updated.toString().slice(0,10).split('-').reverse().join('-')
			const time = updated && updated.toString().slice(11, 16)
			return (
				<tr key={_id}>
					<td>{user_name}</td>
					<td>{name}</td>
					<td>{cardsCount}</td>
					<td>{time}</td>
					<td><NavLink className={s.cardLink} onClick={() => goToCardHandler(_id)} to={PATH.CARDS + `/${_id}`}>
						Go to cards</NavLink>
					</td>
					<td><NavLink className={s.cardLink} onClick={() => goToCardHandler(_id)}
											 to={PATH.TRAIN + `/${_id}`}>Train</NavLink></td>
					<td className={s.operation}>
						{
							user_id === myId &&
              <>
                <NavLink className={s.refreshBtn} to={PATH.PACKS + '/update/' + _id}>
                  <img src={refresh} className={s.refreshIcon}/>
                </NavLink>
                <NavLink className={s.delBtn} to={PATH.PACKS + '/delete/' + _id}>
                  <img src={del} className={s.delIcon}/>
                </NavLink>
              </>
						}
					</td>
				</tr>
			)
		})
	}

	const renderBodyCards = (cards: Array<CardType>) => {
		if (!cards.length) return
		return cards && cards.map(({_id, question, answer, grade, user_id}) => {
			console.log(_id)
			return (
				<tr key={_id}>
					<td>{question}</td>
					<td>{answer}</td>
					<td>{grade}</td>
					<td className={s.operation}>
						{
							user_id === myId &&
              <>
                <NavLink className={s.refreshBtn} to={PATH.CARDS + '/update/' + _id}>
                  <img src={refresh} className={s.refreshIcon}/>
                </NavLink>
                <NavLink className={s.delBtn} to={PATH.CARDS + '/delete/' + _id}>
                  <img src={del} className={s.delIcon}/>
                </NavLink>
              </>
						}
					</td>
				</tr>
			)
		})
	}


	return (
		<div className={s.tableBox}>
			<table className={s.table}>
				<thead>
				<tr>
					{packs && renderHeader(headerElement)}
					{cards && renderHeader(headerElement, cards)}
				</tr>
				</thead>
				<tbody>
				{packs && renderBodyPacks(packs)}
				{cards && renderBodyCards(cards)}
				{cards && !cards.length && <tr className={s.emptyPackTitle}>
          <td>There are no cards in this pack..</td>
        </tr>}

				</tbody>
			</table>
		</div>
	)
}
