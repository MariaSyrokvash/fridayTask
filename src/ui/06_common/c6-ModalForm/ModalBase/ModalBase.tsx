import React, {ChangeEvent, FC} from 'react'
import s from './ModalBase.module.scss'
import {useParams} from 'react-router-dom';
import SuperButton from '../../c2-SuperButton/SuperButton';
import SuperInputText from '../../c1-SuperInputText/SuperInputText';

type PropsType = {
	closeModal: () => void
	input: string
	onChangeText: (value: string) => void
	addTextHandler?: (id: string, value: string) => void
	addNewItemHandler?: (value: string) => void
	title: string
	theme?: string
	isAddingForm: boolean
}

export const ModalBase: FC<PropsType> = ({
																					 closeModal,
																					 input,
																					 onChangeText,
																					 addTextHandler,
																					 title,
																					 theme, addNewItemHandler, isAddingForm
																				 }) => {
	const paramsPack = useParams<{ packId: string }>()
	const paramsCard = useParams<{ cardId: string }>()

	const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
		onChangeText(event.currentTarget.value)
	}

	const successHandler = () => {
		if (paramsPack.packId) {
			addTextHandler && addTextHandler(paramsPack.packId, input)
		} else if (paramsCard.cardId) {
			addTextHandler && addTextHandler(paramsCard.cardId, input)
		}
	}

	const successAddHandler = () => {
		addNewItemHandler && addNewItemHandler(input)
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
					<SuperInputText onChange={onChangeCallback} inputClassName={s.input} value={input}/>
					<SuperButton onClick={isAddingForm ? successAddHandler : successHandler} disabled={!input}
											 className={s.successBtn}>Ok</SuperButton>
				</div>
			</div>
		</div>
	)
}

