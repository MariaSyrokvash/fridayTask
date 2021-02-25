import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import s from './App.module.css';
import useTheme from '../../../utils/hooks/useTheme';
import SuperButton from '../../06_common/SuperButton/SuperButton';

function App() {
	const {theme, toggleTheme} = useTheme();


	return (
		<BrowserRouter>
			<div className={`${s.app} ${theme === 'dark' ? s.dark : s.light}`}>
				<div className={s.btnBox}>
					<SuperButton onClick={toggleTheme} className={`${s.switcherBtn} ${theme === 'dark' ? s.dark : s.light}`}>{theme === 'dark' ?
					<span className={s.emoji}>&#127770;</span> : <span className={s.emoji}>&#127773;</span>}</SuperButton></div>


			</div>
		</BrowserRouter>
	);
}

export default App;
