import React, {FC} from 'react';
import { NavLink } from 'react-router-dom';
import style from './Profile.module.scss'
import {PATH} from '../05_routes/Routes';
import {ProfileType} from '../../bll/reducers/profile-reducer';


type ProfilePropsType = {
	profile: ProfileType
}

export const Profile: FC<ProfilePropsType> = ({profile}) => {

//1234567890-=


	return (
		<div className={style.profileBox}>
			<h1 className={style.title}>Profile</h1>
			<div className={style.wrap}>
				<p className={style.name}>Hello, <span className={style.nameAccent}>{profile.name}</span></p>
				<p className={style.packs}>You have {profile.publicCardPacksCount}

				<NavLink to={PATH.PACKS} className={style.packLink}><span className={style.packsLinkText}> packs</span></NavLink>
				.</p>
			</div>
		</div>
	);
}
