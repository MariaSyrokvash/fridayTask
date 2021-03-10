import React, {ChangeEvent, FC} from 'react'
import s from './ModalCard.module.scss'
import {useParams} from 'react-router-dom';
import SuperButton from '../../../c2-SuperButton/SuperButton';
import SuperInputText from '../../../c1-SuperInputText/SuperInputText';

type PropsType = {
	closeModal: () => void
	inputFirst: string
	inputSecond: string
	onChangeTextFirst: (value: string) => void
	onChangeTextSecond: (value: string) => void
	addTextHandler: (id: string, value1: string, value2: string) => void
	title: string
	theme?: string
}

export const ModalCard: FC<PropsType> = ({
																					 closeModal,
																					 inputFirst,
																					 onChangeTextFirst,
																					 onChangeTextSecond,
																					 addTextHandler,
																					 title, inputSecond,theme
																				 }) => {
	const paramsCard = useParams<{ cardId: string }>()
	const params = useParams<{ packId: string }>()

	const onChangeCallbackForFirstInput = (event: ChangeEvent<HTMLInputElement>) => {
		onChangeTextFirst(event.currentTarget.value)
	}

	const onChangeCallbackForSecondInput = (event: ChangeEvent<HTMLInputElement>) => {
		onChangeTextSecond(event.currentTarget.value)
	}

	const successHandler = () => {
		if (paramsCard.cardId) {
			addTextHandler(paramsCard.cardId, inputFirst, inputSecond)
		} else if (params.packId) {
			addTextHandler(params.packId, inputFirst, inputSecond)
		}
	}


	return (
		<div className={s.wrapper}>
			<div className={`${s.modal} ${theme === 'light' ? s.light : s.dark}`}>
				<div className={s.closeBtnWrapper}>
					<SuperButton onClick={closeModal} className={s.btnClose}><span
						className={`${s.closeIcon} ${theme === 'light' ? s.light : s.dark}`}>&times;</span></SuperButton>
				</div>
				<div className={s.title}>{title}</div>
				<div className={s.formWrapper}>
					<SuperInputText onChange={onChangeCallbackForFirstInput} inputClassName={s.input} value={inputFirst}
													placeholder='question'/>
					<SuperInputText onChange={onChangeCallbackForSecondInput} inputClassName={s.input} value={inputSecond}
													placeholder='answer'/>
					<SuperButton className={s.successBtn} onClick={successHandler}
											 disabled={!(inputFirst || inputSecond)}>Ok</SuperButton>
				</div>
			</div>
		</div>
	)
}

