import React, {FC} from 'react'
import s from './ModalConfirm.module.scss'
import {useParams} from 'react-router-dom';
import SuperButton from '../../../c2-SuperButton/SuperButton';

type PropsType = {
	confirmHandler: (id: string) => void
	cancelHandler: () => void
	title: string
	theme?: string
}

export const ModalConfirm: FC<PropsType> = ({

																							confirmHandler, cancelHandler,
																							title, theme
																						}) => {

	const params = useParams<{ packId: string }>()
	const paramsCard = useParams<{ cardId: string }>()

	const successHandler = () => {
		if (params.packId) {
			confirmHandler(params.packId)
		} else if (paramsCard.cardId) {
			confirmHandler(paramsCard.cardId)
		}
	}


	return (
		<>
		<div className={s.wrapper}>
        <div className={`${s.modal} ${theme === 'light' ? s.light : s.dark}`}>
          <div className={s.closeBtnWrapper}>
            <SuperButton onClick={cancelHandler} className={s.btnClose}><span className={`${s.closeIcon} ${theme === 'light' ? s.light : s.dark}`}>&times;</span></SuperButton>
          </div>
          <div className={s.title}>{title}</div>
          <div className={s.formWrapper}>
            <SuperButton onClick={successHandler} className={s.successBtn}>Yes</SuperButton>
            <SuperButton onClick={cancelHandler} className={s.cancelBtn}>No</SuperButton>
          </div>
        </div>
      </div>
		</>
	)
}

