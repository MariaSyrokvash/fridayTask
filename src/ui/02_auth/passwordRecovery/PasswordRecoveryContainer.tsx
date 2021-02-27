import React, {FC} from 'react';
import {PasswordRecovery} from './PasswordRecovery';
import {useSelector} from 'react-redux';
import {AppRootState} from '../../../bll/store';
import {RequestErrorType, RequestStatusType} from '../../../bll/reducers/app-reducer';
import Loader from '../../06_common/Loader/Loader';

type PasswordRecoveryContainerPropsType = {
	theme?: string
}

export const PasswordRecoveryContainer:FC<PasswordRecoveryContainerPropsType> = ({theme}) => {
	const recoveryError = useSelector<AppRootState, RequestErrorType>(state => state.recoveryPass.recoveryError)
	const recoverySuccess= useSelector<AppRootState, RequestErrorType>(state => state.recoveryPass.recoverySuccess)
	const status = useSelector<AppRootState, RequestStatusType>(state => state.app.status)

	if (status === 'loading') {
		return <Loader/>
	}

	return (
		<>
			<PasswordRecovery theme={theme} recoveryError={recoveryError} recoverySuccess={recoverySuccess}/>
		</>
	);
}
