import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../05_routes/Routes';
import style from './Menu.module.scss'

type MenuType = {
	theme?: string
}

export const Menu: React.FC<MenuType> = ({theme}) => {


	return (
		<nav className={style.navBox}>
			<ul className={style.navList}>
				<li className={style.navItem}>
					<NavLink activeClassName={style.selected}
									 className={`${style.link} ${theme === 'dark' ? style.dark : style.light}`}
									 to={PATH.REGISTRATION}>Registration</NavLink>
				</li>
				<li className={style.navItem}>
					<NavLink className={`${style.link} ${theme === 'dark' ? style.dark : style.light}`}
									 activeClassName={style.selected} to={PATH.LOGIN}>Login</NavLink>
				</li>
				<li className={style.navItem}>
					<NavLink className={`${style.link} ${theme === 'dark' ? style.dark : style.light}`}
									 activeClassName={style.selected} to={PATH.PROFILE}>Profile</NavLink>
				</li>
				<li className={style.navItem}>
					<NavLink className={`${style.link} ${theme === 'dark' ? style.dark : style.light}`}
									 activeClassName={style.selected} to={PATH.RECOVERY_PASSWORD}>Recovery Password</NavLink>
				</li>
				<li className={style.navItem}>
					<NavLink className={`${style.link} ${theme === 'dark' ? style.dark : style.light}`}
									 activeClassName={style.selected} to={PATH.NEW_PASSWORD}>NewPassword</NavLink>
				</li>

				<li className={style.navItem}>
					<NavLink className={`${style.link} ${theme === 'dark' ? style.dark : style.light}`}
									 activeClassName={style.selected} to={PATH.PACKS}>Packs</NavLink>
				</li>
			</ul>
			{/*<div className={style.navItem}>*/}
			{/*    <NavLink className={style.link} to={PATH.CARDS}>Cards</NavLink>*/}
			{/*</div>*/}
		</nav>
	)
}
