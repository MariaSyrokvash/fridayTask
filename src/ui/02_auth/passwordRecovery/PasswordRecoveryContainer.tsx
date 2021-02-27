import React, {FC} from 'react';
import {PasswordRecovery} from './PasswordRecovery';
import {useSelector} from 'react-redux';
import {AppRootState} from '../../../bll/store';
import {RequestErrorType} from '../../../bll/reducers/app-reducer';

type PasswordRecoveryContainerPropsType = {
	theme?: string
}

export const PasswordRecoveryContainer:FC<PasswordRecoveryContainerPropsType> = ({theme}) => {
	const recoveryError = useSelector<AppRootState, RequestErrorType>(state => state.recoveryPass.recoveryError)


	return (
		<>
			<PasswordRecovery theme={theme} recoveryError={recoveryError}/>
		</>
	);
}
