import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../05_routes/Routes';
import style from './Header.module.scss'
import {Logout} from '../../02_auth/q2-logout/Logout';
import {Theme} from '../../06_common/c12-Theme/Theme';

type MenuType = {
	theme: string
	toggleTheme: () => void
}

export const Header: React.FC<MenuType> = ({theme, toggleTheme}) => {

	return (
		<>
				<div className={style.overlay}>
					<label htmlFor="toggle" className={style.label}></label>
				</div>

				<input type="checkbox" id="toggle" name="toggle" className={style.toggle}/>
					<div className={style.verticalNav}>
						<a href="/">NEWS</a>
						<a href="/">ABOUT</a>
						<a href="/">BLOG</a>
						<a href="/">CONTACT</a>
					</div>

			<div className={style.puppies}></div>


		{/*<nav*/}
		{/*	className={`${style.navBox} ${theme === 'light' ? style.light : style.dark} `}>*/}
		{/*	<ul className={style.navList}>*/}
		{/*		<div className={style.navListInner}>*/}
		{/*			<li className={style.navItem}>*/}
		{/*				<NavLink activeClassName={style.selected}*/}
		{/*								 className={`${style.link} ${theme === 'dark' ? style.dark : style.light}`}*/}
		{/*								 to={PATH.REGISTRATION}>Sign up</NavLink>*/}
		{/*			</li>*/}
		{/*			<li className={style.navItem}>*/}
		{/*				<NavLink className={`${style.link} ${theme === 'dark' ? style.dark : style.light}`}*/}
		{/*								 activeClassName={style.selected} to={PATH.LOGIN}>Sign in</NavLink>*/}
		{/*			</li>*/}
		{/*			<li className={style.navItem}>*/}
		{/*				<NavLink className={`${style.link} ${theme === 'dark' ? style.dark : style.light}`}*/}
		{/*								 activeClassName={style.selected} to={PATH.PROFILE}>Profile</NavLink>*/}
		{/*			</li>*/}
		{/*			/!*<li className={style.navItem}>*!/*/}
		{/*			/!*	<NavLink className={`${style.link} ${theme === 'dark' ? style.dark : style.light}`}*!/*/}
		{/*			/!*					 activeClassName={style.selected} to={PATH.RECOVERY_PASSWORD}>Recovery Password</NavLink>*!/*/}
		{/*			/!*</li>*!/*/}
		{/*			/!*<li className={style.navItem}>*!/*/}
		{/*			/!*	<NavLink className={`${style.link} ${theme === 'dark' ? style.dark : style.light}`}*!/*/}
		{/*			/!*					 activeClassName={style.selected} to={PATH.NEW_PASSWORD}>New Password</NavLink>*!/*/}
		{/*			/!*</li>*!/*/}

		{/*			<li className={style.navItem}>*/}
		{/*				<NavLink className={`${style.link} ${theme === 'dark' ? style.dark : style.light}`}*/}
		{/*								 activeClassName={style.selected} to={PATH.PACKS}>Packs</NavLink>*/}
		{/*			</li>*/}
		{/*		</div>*/}
		{/*		<div className={style.navListInnerSecond}>*/}
		{/*			<li className={style.navItem}>*/}
		{/*				<Logout/>*/}
		{/*			</li>*/}
		{/*			<li className={`${style.navItemTheme} ${style.navItem}`}>*/}
		{/*				<Theme theme={theme} toggleTheme={toggleTheme}/>*/}
		{/*			</li>*/}
		{/*		</div>*/}
		{/*	</ul>*/}
		{/*</nav>*/}
		</>
	)
}
