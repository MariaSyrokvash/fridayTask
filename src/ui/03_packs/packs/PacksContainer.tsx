import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootState} from '../../../bll/store';
import {Redirect} from 'react-router-dom';
import {PATH} from '../../05_routes/Routes';


export const PacksContainer = () => {
	const isLoggedIn = useSelector<AppRootState, boolean>(state => state.login.isLoggedIn)


	if (!isLoggedIn) {
		return <Redirect to={PATH.LOGIN}/>
	}

	return (
		<div>
			PacksContainer
		</div>
	)
}

