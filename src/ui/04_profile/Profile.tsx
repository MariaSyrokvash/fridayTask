import React, {FC} from 'react';
import { NavLink } from 'react-router-dom';
import style from './Profile.module.scss'
import {PATH} from '../05_routes/Routes';
import {ProfileType} from '../../bll/reducers/profile-reducer';
import user from './image/user.svg'
import edit	from './image/edit.svg'
import {Toaster} from 'react-hot-toast';

type ProfilePropsType = {
	profile: ProfileType
}

export const Profile: FC<ProfilePropsType> = ({profile}) => {

//1234567890-=

	return (
		<div className={style.profileBox}>
			<div className={style.editBox}><img src={edit} className={style.editIcon}/></div>
			<Toaster />
			<div>
				<div><img src={user} alt='userPhoto' className={style.avatar}/></div>
			</div>
			<div className={style.wrap}>
				<p className={style.name}>Hello, <span className={style.nameAccent}>{profile.name}</span></p>
				<p className={style.packs}>You have {profile.publicCardPacksCount}

				<NavLink to={PATH.PACKS} className={style.packLink}><span className={style.packsLinkText}> packs</span></NavLink>
				.</p>
			</div>
		</div>
	);
}
