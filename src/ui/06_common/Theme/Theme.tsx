import React, {FC} from 'react';
import SuperButton from '../c2-SuperButton/SuperButton';
import s from './Theme.module.scss';

type ThemePropsType = {
	theme: string
	toggleTheme: () => void
}

export const Theme: FC<ThemePropsType> = ({theme, toggleTheme}) => {
	return (
		<div className={s.btnBox}>
			<SuperButton onClick={toggleTheme}
									 className={`${s.switcherBtn} ${theme === 'dark' ? s.dark : s.light}`}>{theme === 'dark' ?
				<span className={s.emoji}>&#127770;</span> : <span className={s.emoji}>&#127773;</span>}</SuperButton>
		</div>
	)
}