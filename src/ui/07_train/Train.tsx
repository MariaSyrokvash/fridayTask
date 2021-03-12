import React, {useEffect, useState} from 'react';
import {CardType, setCardsAC} from '../../bll/reducers/cards-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, useParams} from 'react-router-dom';
import {AppRootState} from '../../bll/store';
import SuperButton from '../06_common/c2-SuperButton/SuperButton';
import t from './TrainContainer.module.scss';
import {PATH} from '../05_routes/Routes';

const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал'];

const getCard = (cards: CardType[]) => {
	const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
	const rand = Math.random() * sum;
	const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
			const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
			return {sum: newSum, id: newSum < rand ? i : acc.id}
		}
		, {sum: 0, id: -1});
	console.log('test: ', sum, rand, res)

	return cards[res.id + 1];
}

export const Train = () => {
		const dispatch = useDispatch();
		const [isChecked, setIsChecked] = useState<boolean>(false);
		const [first, setFirst] = useState<boolean>(true);
		const {cards} = useSelector((store: AppRootState) => store.cards);
		const paramsCard = useParams<{ cardId: string }>()

		const [card, setCard] = useState<any>({
			_id: 'fake',
			cardsPack_id: '',

			answer: 'empty answer',
			question: 'empty question',
			grade: 0,
			shots: 0,

			type: '',
			rating: 0,
			more_id: '',

			created: '',
			updated: '',
		});


		useEffect(() => {
			console.log('LearnContainer useEffect');

			if (first) {
				// dispatch(getCardsTC());
				setFirst(false);
			}

			console.log('cards', cards)
			if (cards.length > 0) setCard(getCard(cards));

			return () => {
				console.log('LearnContainer useEffect off');
			}
		}, [dispatch, paramsCard, cards, first]);

		const onNext = () => {
			setIsChecked(false);

			if (cards.length > 0) {
				setCard(getCard(cards));
			} else {

			}
		}

		const resetCards = () => {
			dispatch(setCardsAC([]))
		}

		return (
			<div className={t.trainBox}>

				{
					!cards.length
						? <>
							<NavLink to={PATH.PACKS} className={t.backLink}>
								<SuperButton className={t.backBtn} onClick={resetCards}>Packs</SuperButton>
							</NavLink>
							<div className={t.emptyMessage}>Oops, it's empty. Please choose another pack..</div>
						</>
						:
						<>
							<NavLink to={PATH.PACKS} className={t.backLink}>
								<SuperButton className={t.backBtn} onClick={resetCards}>Packs</SuperButton>
							</NavLink>
							<div className={t.question}>{card.question}</div>
							<div>
								<SuperButton onClick={() => setIsChecked(true)} className={t.checkBtn}>check</SuperButton>
							</div>

							{isChecked && (
								<>
									<div className={t.answer}>{card.answer}</div>

									<div className={t.answerBoxBtn}>
										{grades.map((g, i) => (
											<SuperButton className={t.answerBtn} key={'grade-' + i} onClick={() => {
											}}>{g}</SuperButton>))
										}
									</div>

									<div><SuperButton onClick={onNext} className={t.nextBtn}>next</SuperButton></div>
								</>
							)}
						</>
				}
			</div>
		);
	}
;

