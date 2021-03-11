import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {appReducer} from './reducers/app-reducer';
import {recoveryPasswordReducer} from './reducers/recoveryPassword-reducer';
import {newPasswordReducer} from './reducers/newPassword-reducer';
import {profileReducer} from './reducers/profile-reducer';
import {packsReducer} from './reducers/packs-reducer';
import {cardsReducer} from './reducers/cards-reducer';
import {signUpReducer} from './reducers/signUp-reducer';
import {signInReducer} from './reducers/signIn-reducer';



const rootReducer = combineReducers({
	app: appReducer,
	registration: signUpReducer,
	login: signInReducer,
	recoveryPass: recoveryPasswordReducer,
	newPassword: newPasswordReducer,
	profile: profileReducer,
	packs: packsReducer,
	cards: cardsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootState = ReturnType<typeof rootReducer> //автомачически подтягивает типы из combineReducers

// @ts-ignore
window.store = store