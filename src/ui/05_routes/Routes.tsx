import React, {FC} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {ProfileContainer} from '../04_profile/ProfileContainer';
import {Test} from '../test/Test';
import {SignInContainer} from '../02_auth/q1-signIn/SignInContainer';
import {Error404} from '../06_common/c4-Error404/Error404';
import {PasswordRecoveryContainer} from '../02_auth/q4-passwordRecovery/PasswordRecoveryContainer';
import {NewPasswordContainer} from '../02_auth/q5-newPassword/NewPasswordContainer';
import {PacksContainer} from '../03_packs/Packs/PacksContainer';
import {CardsContainer} from '../03_packs/Cards/CardsContainer';
import { SignUpContainer } from '../02_auth/q3-signUp/SignUpContainer';
import {TrainContainer} from '../07_train/TrainContainer';

export const PATH = {
	LOGIN: '/login',
	REGISTRATION: '/registration',
	PROFILE: '/profile',
	ERROR_404: '/404',
	RECOVERY_PASSWORD: '/recovery_pass',
	NEW_PASSWORD: '/new_pass',
	TEST: '/test',
	PACKS: '/packs',
	CARDS: '/cards',
	TRAIN: '/train'
}

type RoutesPropsType = {
	theme?: string
}

export const Routes: FC<RoutesPropsType> = ({theme}) => {
	return (
		<div>
			<Switch>
				<Route path={'/'} exact render={() => <Redirect to={PATH.LOGIN}/>}/>
				<Route path={PATH.LOGIN} render={() => <SignInContainer theme={theme}/>}/>
				<Route path={PATH.REGISTRATION} render={() => <SignUpContainer theme={theme}/>}/>
				<Route path={PATH.PROFILE} render={() => <ProfileContainer theme={theme}/>}/>
				<Route path={PATH.ERROR_404} render={() => <Error404/>}/>
				<Route path={PATH.RECOVERY_PASSWORD} render={() => <PasswordRecoveryContainer theme={theme}/>}/>
				<Route path={PATH.NEW_PASSWORD} render={() => <NewPasswordContainer theme={theme}/>}/>
				<Route path={PATH.TEST} render={() => <Test/>}/>
				<Route path={PATH.PACKS} render={() => <PacksContainer theme={theme}/>}/>
				<Route path={PATH.CARDS + `/:id`} render={() => <CardsContainer theme={theme}/>}/>
				<Route path={PATH.TRAIN + `/:id`} render={() => <TrainContainer theme={theme}/>}/>
				<Route render={() => <Error404/>}/>
			</Switch>
		</div>
	)
}
