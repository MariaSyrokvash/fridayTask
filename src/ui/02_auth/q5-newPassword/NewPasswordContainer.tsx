import React, {FC} from 'react';
import {NewPassword} from './NewPassword';
import {useSelector} from 'react-redux';
import {AppRootState} from '../../../bll/store';
import {RequestStatusType} from '../../../bll/reducers/app-reducer';


type NewPasswordContainerPropsType = {
	theme?: string
}

export const NewPasswordContainer: FC<NewPasswordContainerPropsType> = ({theme}) => {
	const status = useSelector<AppRootState, RequestStatusType>(state => state.newPassword.status)
	// const successMessage = useSelector<AppRootState, string>(state => state.newPassword.successMessage)
	// const errorMessage = useSelector<AppRootState, string>(state => state.newPassword.error)


	return (
		<NewPassword theme={theme} status={status}/>
	);
}
