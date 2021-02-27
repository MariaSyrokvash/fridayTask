import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {registrationReducer} from './reducers/registration-reducer';
import {appReducer} from './reducers/app-reducer';
import {loginReducer} from './reducers/login-reducer';
import {recoveryPasswordReducer} from './reducers/recoveryPassword-reducer';
import {newPasswordReducer} from './reducers/newPassword-reducer';



const rootReducer = combineReducers({
	app: appReducer,
	registration: registrationReducer,
	login: loginReducer,
	recoveryPass: recoveryPasswordReducer,
	newPassword: newPasswordReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootState = ReturnType<typeof rootReducer> //автомачически подтягивает типы из combineReducers

// @ts-ignore
window.store = store