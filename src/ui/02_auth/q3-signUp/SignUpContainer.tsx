import React, {FC} from 'react';
import {Redirect} from 'react-router-dom';
import {PATH} from '../../05_routes/Routes';
import {useSelector} from 'react-redux';
import {AppRootState} from '../../../bll/store';
import {RequestErrorType, RequestStatusType} from '../../../bll/reducers/app-reducer';
import Loader from '../../06_common/c5-Loader/Loader';
import { SignUp } from './SignUp';


type RegistrationContainerPropsType = {
	theme?: string
}

export const SignUpContainer: FC<RegistrationContainerPropsType> = ({theme}) => {
	const status = useSelector<AppRootState, RequestStatusType>(state => state.app.status)
	const registrationError = useSelector<AppRootState, RequestErrorType>(state => state.registration.registrationError)
	const isRegistration = useSelector<AppRootState, boolean>(state => state.registration.isRegistration)

	if (isRegistration) {
		return <Redirect to={PATH.LOGIN}/>
	}

	if (status === 'loading') {
		return <Loader/>
	}

	return (
		<SignUp
			registrationError={registrationError}
			status={status}
			theme={theme}
		/>
	)
};