import React, {useCallback} from 'react';
import s from './Logout.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootState} from '../../../bll/store';
import SuperButton from '../../06_common/c2-SuperButton/SuperButton';
import {RequestStatusType} from '../../../bll/reducers/app-reducer';
import Loader from '../../06_common/c5-Loader/Loader';
import {Toaster} from 'react-hot-toast';
import {logoutTC} from '../../../bll/reducers/signIn-reducer';

export const Logout = () => {
	const isLoggedIn = useSelector<AppRootState, boolean>(state => state.login.isLoggedIn)
	const status = useSelector<AppRootState, RequestStatusType>(state => state.login.logoutStatus)
	const dispatch = useDispatch()


	const logOutHandler = useCallback(() => {
		dispatch(logoutTC())
	}, [dispatch])


	return (
		<>
			<Toaster />
			{status === 'loading' ? <Loader/> : null}
			{isLoggedIn && <SuperButton onClick={logOutHandler} className={s.logout}>Logout</SuperButton>}
		</>
	)
}