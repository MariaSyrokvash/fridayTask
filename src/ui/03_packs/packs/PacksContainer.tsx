import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootState} from '../../../bll/store';
import {Redirect} from 'react-router-dom';
import {PATH} from '../../05_routes/Routes';
import {Packs} from './Packs';
import {getPacksTC, PackType} from '../../../bll/reducers/packs-reducer';
import {setIdProfileAC} from '../../../bll/reducers/profile-reducer';


export const PacksContainer = () => {
	const dispatch = useDispatch()
	const isLoggedIn = useSelector<AppRootState, boolean>(state => state.login.isLoggedIn)
	const packs = useSelector<AppRootState, Array<PackType>>(state => state.packs.packs)



	useEffect(() => {
		dispatch(setIdProfileAC(null))
		dispatch(getPacksTC())
	}, [dispatch])

	if (!isLoggedIn) {
		return <Redirect to={PATH.LOGIN}/>
	}

	console.log(packs)

	return (
		<Packs />
	)
}

