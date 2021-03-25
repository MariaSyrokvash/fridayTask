import React, {ChangeEvent, FC, useRef} from 'react'
import s from './ModalUpload.module.scss'
import SuperButton from '../../../c2-SuperButton/SuperButton';
import SuperInputText from '../../../c1-SuperInputText/SuperInputText';
import {
	setUserProfileAvatarAC,
	setUserProfileNameAC,
	uploadUserProfileTC
} from '../../../../../bll/reducers/profile-reducer';
import {useDispatch} from 'react-redux';
import {RequestStatusType} from '../../../../../bll/reducers/app-reducer';

type PropsType = {
	closeModal: () => void
	title: string
	theme?: string
	imgData: any
	updateValue: string
	onChangeTextUpdateHandler: (value: string) => void
	setImgDataHandler: (value: string | ArrayBuffer | null) => void
	status: RequestStatusType
}

export const ModalUpload: FC<PropsType> = ({
																						 closeModal,
																						 title,
																						 theme,
																						 imgData,
																						 updateValue,
																						 onChangeTextUpdateHandler,
																						 setImgDataHandler,
																						 status
																					 }) => {

	const dispatch = useDispatch()
	const inRef = useRef<HTMLInputElement>(null);
	// const [picture, setPicture] = useState<null | File>(null);

	const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(setUserProfileNameAC(event.currentTarget.value))
		onChangeTextUpdateHandler(event.currentTarget.value)
	}

	const onChangePicture = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			// setPicture(e.target.files[0]);
			const reader = new FileReader();
			reader.addEventListener('load', () => {
				dispatch(setUserProfileAvatarAC(reader.result))
				setImgDataHandler(reader.result);
			});
			reader.readAsDataURL(e.target.files[0]);
		}
	};


	const send = () => {
		dispatch(uploadUserProfileTC())
		closeModal()
	};

	return (
		<div className={s.wrapper}>
			<div className={`${s.modal} ${theme === 'light' ? s.light : s.dark}`}>
				<div className={s.closeBtnWrapper}>
					<SuperButton onClick={closeModal} className={s.btnClose}><span
						className={`${s.closeIcon} ${theme === 'light' ? s.light : s.dark}`}>&times;</span></SuperButton>
				</div>
				<div className={s.title}>{title}</div>
				<div className={s.formWrapper}>
					<input className={s.inputUpload} style={{display: 'none'}} ref={inRef} type="file"
								 onChange={onChangePicture}/>
					<SuperButton disabled={status === 'loading'} className={s.uploadBtn}
											 onClick={() => inRef && inRef.current && inRef.current.click()}>upload
						image</SuperButton>
					<div className={s.imgBox}><img src={imgData} className={s.previewIcon}/></div>

					<SuperInputText onChange={onChangeCallback} inputClassName={s.input}
													placeholder='name' value={updateValue}/>
					<SuperButton className={s.successBtn} onClick={send} disabled={status === 'loading'}>Ok</SuperButton>
				</div>
			</div>
		</div>
	)
}

