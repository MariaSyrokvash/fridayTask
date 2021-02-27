import React from 'react';
import {Profile} from './Profile';
import {Redirect} from 'react-router-dom';
import {PATH} from '../05_routes/Routes';
import {useSelector} from 'react-redux';
import {AppRootState} from '../../bll/store';



export const ProfileContainer = () => {
  const isLoggedIn = useSelector<AppRootState, boolean>(state => state.login.isLoggedIn)
  if (!isLoggedIn) {
    return <Redirect to={PATH.LOGIN}/>
  }

    return (

        <div>
            <Profile />
        </div>
    );
}
