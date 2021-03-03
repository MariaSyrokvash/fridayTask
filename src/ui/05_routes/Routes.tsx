import React, {FC} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {ProfileContainer} from '../04_profile/ProfileContainer';
import {Test} from '../test/Test';
import {Cards} from '../03_packs/Cards/Cards';
import {LoginContainer} from '../02_auth/q1-login/LoginContainer';
import {RegistrationContainer} from '../02_auth/q3-registration/RegistrationContainer';
import {Error404} from '../06_common/c4-Error404/Error404';
import {PasswordRecoveryContainer} from '../02_auth/q4-passwordRecovery/PasswordRecoveryContainer';
import {NewPasswordContainer} from '../02_auth/q5-newPassword/NewPasswordContainer';
import {PacksContainer} from '../03_packs/Packs/PacksContainer';

export const PATH = {
	LOGIN: '/login',
	REGISTRATION: '/registration',
	PROFILE: '/profile',
	ERROR_404: '/404',
	RECOVERY_PASSWORD: '/recovery_pass',
	NEW_PASSWORD: '/new_pass',
	TEST: '/test',
	PACKS: '/packs',
	CARDS: '/cards'
}

type RoutesPropsType = {
	theme?: string
}

export const Routes: FC<RoutesPropsType> = ({theme}) => {
	return (
		<div>
			<Switch>
				<Route path={'/'} exact render={() => <Redirect to={PATH.LOGIN}/>}/>
				<Route path={PATH.LOGIN} render={() => <LoginContainer theme={theme}/>}/>
				<Route path={PATH.REGISTRATION} render={() => <RegistrationContainer theme={theme}/>}/>
				<Route path={PATH.PROFILE} render={() => <ProfileContainer/>}/>
				<Route path={PATH.ERROR_404} render={() => <Error404/>}/>
				<Route path={PATH.RECOVERY_PASSWORD} render={() => <PasswordRecoveryContainer theme={theme}/>}/>
				<Route path={PATH.NEW_PASSWORD} render={() => <NewPasswordContainer theme={theme}/>}/>
				<Route path={PATH.TEST} render={() => <Test/>}/>
				<Route path={PATH.PACKS} render={() => <PacksContainer/>}/>
				<Route path={PATH.CARDS + `/:id`} render={() => <Cards/>}/>
				<Route render={() => <Error404/>}/>
			</Switch>
		</div>
	)
}
