import React, {FC, useState} from 'react';
import {NavLink, Route, useHistory} from 'react-router-dom';
import style from './Profile.module.scss'
import {PATH} from '../05_routes/Routes';
import {ProfileType} from '../../bll/reducers/profile-reducer';
import user from './image/user.svg'
import {Toaster} from 'react-hot-toast';
import SuperButton from '../06_common/c2-SuperButton/SuperButton';
import {useSelector} from 'react-redux';
import {AppRootState} from '../../bll/store';
import {ModalUpload} from '../06_common/c6-ModalForm/ModalBase/ModalUpload/ModalUpload';
import {RequestStatusType} from '../../bll/reducers/app-reducer';
import Loader from '../06_common/c5-Loader/Loader';

type ProfilePropsType = {
	profile: ProfileType
	theme?: string
}

export const Profile: FC<ProfilePropsType> = ({profile, theme}) => {
	const myId = useSelector<AppRootState, string | null>(state => state.profile.profile._id)
	const status = useSelector<AppRootState, RequestStatusType>(state => state.profile.status)
	const [updateValue, setUpdateValue] = useState<string>('')
	const [imgData, setImgData] = useState<string | ArrayBuffer | null>(null);
	const history = useHistory()

	const onChangeTextUpdateHandler = (value: string) => setUpdateValue(value)
	const closeModal = () => history.push(PATH.PROFILE)
	const setImgDataHandler = (value: string | ArrayBuffer | null) => setImgData(value)


	return (
		<div className={style.profileBox}>
			{status === 'loading' && <Loader />}
			<Toaster />

			<NavLink to={`${PATH.PROFILE}/edit/${myId}`} className={style.editMode}><SuperButton disabled={status === 'loading'}
				className={style.editMode}>edit</SuperButton></NavLink>

			<div>
				<div className={style.avatarBox}>
					<img src={profile.avatar ? profile.avatar: user} alt='userPhoto' className={style.avatar}/>
				</div>
			</div>
			<div className={style.wrap}>
				<p className={style.name}>Hello, <span className={style.nameAccent}>{profile.name}</span></p>
				<p className={style.packs}>You have {profile.publicCardPacksCount}

					<NavLink to={PATH.PACKS} className={style.packLink}><span
						className={style.packsLinkText}> packs</span></NavLink>
					.</p>
			</div>

			<Route path={`${PATH.PROFILE}/edit/${myId}`}
						 render={() => <ModalUpload theme={theme}
																				title={'Change avatar or name'}
																				closeModal={closeModal}
																				onChangeTextUpdateHandler={onChangeTextUpdateHandler}
																				updateValue={updateValue}
																				imgData={imgData}
																				setImgDataHandler={setImgDataHandler}
																				status={status}
						 />}/>

		</div>
	)
}
