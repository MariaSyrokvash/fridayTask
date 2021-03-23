import React, {FC} from 'react';
import s from './Table.module.scss'
import {PackType, setPackCardsIdAC} from '../../../bll/reducers/packs-reducer';
import del from './image/delete.svg'
import refresh from './image/refresh.svg'
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../05_routes/Routes';
import {CardType} from '../../../bll/reducers/cards-reducer';
import {AppRootState} from '../../../bll/store';
import eye from '../../02_auth/q3-signUp/image/eye.svg';
import train from './../../03_packs/Packs/image/train.svg';
import Loader from '../c5-Loader/Loader';
import {RequestStatusType} from '../../../bll/reducers/app-reducer';
import {Grade} from '../c14-Grade/Grade';

type TablePropsType = {
	headerElement: Array<string>
	packs?: Array<PackType>
	cards?: Array<CardType>
}

export const Table: FC<TablePropsType> = ({packs, headerElement, cards}) => {
	const dispatch = useDispatch()
	const myId = useSelector<AppRootState, string | null>(state => state.profile.profile._id)
	const status = useSelector<AppRootState, RequestStatusType>(state => state.packs.status)

	const renderHeader = (headerElement: Array<string>, cards?: Array<CardType>) => {
		if (cards && !cards.length) return
		return headerElement.map((key, index) => {
			return <th key={index}>{key.toUpperCase()}</th>
		})
	}


	const goToCardHandler = (packId: string) => {
		dispatch(setPackCardsIdAC(packId))
	}

	const goToTrainHandler = (packId: string) => {
		dispatch(setPackCardsIdAC(packId))
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
					<td>
						<NavLink className={s.cardLink} onClick={() => goToCardHandler(_id)} to={PATH.CARDS + `/${_id}`}>
							<img src={eye} className={s.cardIcon}/>
						</NavLink>
					</td>
					<td><NavLink className={s.cardLink} onClick={() => goToTrainHandler(_id)}
											 to={PATH.TRAIN + `/${_id}`}><img src={train} className={s.trainIcon}/></NavLink></td>
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
			return (
				<tr key={_id}>
					<td>{question}</td>
					<td>{answer}</td>
					<td><Grade value={grade}/></td>
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
			{status === 'loading' && <Loader/>}
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
				{cards && !cards.length && status !== 'loading' && <tr className={s.emptyPackTitle}>
          <td>There are no cards in this pack..</td>
        </tr>}
				</tbody>
			</table>
		</div>
	)
}
