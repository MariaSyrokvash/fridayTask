import React from 'react';
import s from './App.module.scss';
import useTheme from '../../../utils/hooks/useTheme';
import {Header} from '../Header/Header';
import {Theme} from '../../06_common/Theme/Theme';
import {Routes} from '../../05_routes/Routes';

function App() {
	const {theme, toggleTheme} = useTheme();


	return (
		<div className={`${s.app} ${theme === 'dark' ? s.dark : s.light}`}>
			<div className={s.container}>
				<Theme theme={theme} toggleTheme={toggleTheme}/>
				<Header theme={theme}/>
				<Routes theme={theme}/>
			</div>
		</div>
	);
}

export default App;
