import React, {FC} from 'react';
import s from './Theme.module.scss';

type ThemePropsType = {
	theme: string
	toggleTheme: () => void
}

export const Theme: FC<ThemePropsType> = ({theme, toggleTheme}) => {
	return (
		<div className={s.btnBox}>
			{theme === 'dark' ? <span onClick={toggleTheme} className={s.emoji}>&#127770;</span> :
				<span onClick={toggleTheme} className={s.emoji}>&#127773;</span>}
		</div>
	)
}