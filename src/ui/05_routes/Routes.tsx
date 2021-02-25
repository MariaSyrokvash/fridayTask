import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import { LoginContainer } from "../02_auth/login/LoginContainer";
import {ProfileContainer} from "../04_profile/ProfileContainer";
import {Test} from "../test/Test";
import {RegistrationContainer} from "../02_auth/registration/RegistrationContainer";
import {Error404} from "../06_common/error404/Error404";
import {NewPasswordContainer} from "../02_auth/newPassword/NewPasswordContainer";
import {PasswordRecoveryContainer} from "../02_auth/passwordRecovery/PasswordRecoveryContainer";
import {PacksContainer} from '../03_packs/packs/PacksContainer';
import {Cards} from '../03_packs/Cards/Cards';

export const PATH = {
    LOGIN:'/login',
    REGISTRATION:'/registration',
    PROFILE:'/profile',
    ERROR_404:'/404',
    RECOVERY_PASSWORD:'/recovery_pass',
    NEW_PASSWORD:'/new_pass',
    TEST:'/test',
    PACKS: '/packs',
    CARDS: '/cards'
}

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.LOGIN}/>}/>
                <Route path={PATH.LOGIN} render={() => <LoginContainer/>}/>
                <Route path={PATH.REGISTRATION} render={() => <RegistrationContainer/>}/>
                <Route path={PATH.PROFILE} render={() => <ProfileContainer/>}/>
                <Route path={PATH.ERROR_404} render={() => <Error404/>}/>
                <Route path={PATH.RECOVERY_PASSWORD} render={() => <PasswordRecoveryContainer/>}/>
                <Route path={PATH.NEW_PASSWORD} render={() => <NewPasswordContainer/>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>
                <Route path={PATH.PACKS} render={() => <PacksContainer/>}/>
                <Route path={PATH.CARDS + `/:id`}  render={() => <Cards/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}
