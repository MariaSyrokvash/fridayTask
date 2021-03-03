import React, {FC} from 'react';
import {Login} from './Login';
import {useSelector} from 'react-redux';
import {AppRootState} from '../../../bll/store';
import {RequestErrorType, RequestStatusType} from '../../../bll/reducers/app-reducer';
import {Redirect} from 'react-router-dom';
import {PATH} from '../../05_routes/Routes';
import Loader from '../../06_common/c5-Loader/Loader';

type LoginContainerPropsType = {
  theme?: string
}

export const LoginContainer: FC<LoginContainerPropsType> = ({theme}) => {
  const isLoggedIn = useSelector<AppRootState, boolean>(state => state.login.isLoggedIn)
  const status = useSelector<AppRootState, RequestStatusType>(state => state.login.loginStatus)
  const loginError = useSelector<AppRootState, RequestErrorType>(state => state.login.loginError)

  if (isLoggedIn) return <Redirect to={PATH.PROFILE}/>

  if (status === 'loading') {
    return <Loader/>
  }

    return (
     <>
       <Login theme={theme} status={status} loginError={loginError}/>
     </>

    );
}
