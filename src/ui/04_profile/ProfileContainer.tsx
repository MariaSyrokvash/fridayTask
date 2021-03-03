import React from 'react';
import {Profile} from './Profile';
import {Redirect} from 'react-router-dom';
import {PATH} from '../05_routes/Routes';
import {useSelector} from 'react-redux';
import {AppRootState} from '../../bll/store';
import {ProfileType} from '../../bll/reducers/profile-reducer';


export const ProfileContainer = () => {
  const isLoggedIn = useSelector<AppRootState, boolean>(state => state.login.isLoggedIn)
  const profile = useSelector<AppRootState, ProfileType>(state => state.profile.profile)


  if (!isLoggedIn) {
    return <Redirect to={PATH.LOGIN}/>
  }

    return (

        <div>
            <Profile profile={profile} />
        </div>
    );
}
