import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {registrationReducer} from './reducers/registration-reducer';
import {appReducer} from './reducers/app-reducer';
import {loginReducer} from './reducers/login-reducer';
import {recoveryPasswordReducer} from './reducers/recoveryPassword-reducer';



const rootReducer = combineReducers({
	app: appReducer,
	registration: registrationReducer,
	login: loginReducer,
	recoveryPass: recoveryPasswordReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootState = ReturnType<typeof rootReducer> //автомачически подтягивает типы из combineReducers

// @ts-ignore
window.store = store