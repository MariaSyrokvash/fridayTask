import React, {useEffect} from 'react';
import s from './App.module.scss';
import useTheme from '../../../utils/hooks/useTheme';
import {Routes} from '../../05_routes/Routes';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootState} from '../../../bll/store';
import {Header} from '../v2-Header/Header';
import {initializeAppTC} from '../../../bll/reducers/app-reducer';
import {InitializingLoader} from '../../06_common/c13-Initializing/Initializing';

function App() {
	const {theme, toggleTheme} = useTheme();
	const dispatch = useDispatch()
	const initialized = useSelector<AppRootState, boolean>(state => state.app.initialized)

	console.log(initialized, 'initialized')

	useEffect(() => {
		if (!initialized) {
			dispatch(initializeAppTC())
		}
	}, [initialized, dispatch])


	if (!initialized ) {
		return <InitializingLoader />
	}


	return (
		<div className={`${s.app} ${theme === 'dark' ? s.dark : s.light}`}>
			<div className={s.container}>
				<Header theme={theme} toggleTheme={toggleTheme}/>
				<Routes theme={theme}/>
			</div>
		</div>
	);
}

export default App;
