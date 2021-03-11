import React, {FC, useState} from 'react';
import style from './SignIn.module.scss'
import SuperInputText from '../../06_common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../06_common/c2-SuperButton/SuperButton';
import {useFormik} from 'formik';
import SuperCheckbox from '../../06_common/c3-SuperCheckbox/SuperCheckbox';
import {RequestErrorType, RequestStatusType} from '../../../bll/reducers/app-reducer';
import { NavLink } from 'react-router-dom';
import {PATH} from '../../05_routes/Routes';
import {useDispatch} from 'react-redux';
import eye from '../q3-signUp/image/eye.svg'
import {Toaster} from 'react-hot-toast';
import {loginTC} from '../../../bll/reducers/signIn-reducer';

type LoginPropsType = {
	theme?: string
	status: RequestStatusType
	loginError: RequestErrorType
}


type  FormikErrorType = {
	email?: string
	password?: string
	rememberMe?: boolean
}

export const SignIn: FC<LoginPropsType> = ({theme, loginError,status}) => {
	const [disable, setDisable] = useState<boolean>(false)
	const [showPassword, setShowPassword] = useState<boolean>(false)
	const dispatch = useDispatch()

	const changeViewPass = () => setShowPassword(!showPassword)

	const formik = useFormik({

		initialValues: {
			email: '',
			password: '',
			confirmPassword: ''
		},
		validate: (values) => {
			const errors: FormikErrorType = {}
			if (!values.email) {
				errors.email = 'Email is required';
			}
			if (!values.password) {
				errors.password = 'Password is required';
			}

			if (formik.errors.email || formik.errors.password) {
				if (Object.keys(errors).length === 0) {
					setDisable(false)
				} else {
					setDisable(true)
				}
			}

			return errors;
		},
		onSubmit: values => {
			dispatch(loginTC(values))
			setDisable(true)
			formik.resetForm()
		},
	})


	return (
		<div className={style.loginWrapper}>
			<h1 className={style.loginTitle}>Sign in</h1>
			<Toaster/>
			{/*{loginError ? <div className={style.error}>{loginError}</div> : null}*/}
			<form className={style.loginBox} onSubmit={formik.handleSubmit}>
				<div className={style.loginInner}>
					<SuperInputText theme={theme} placeholder='e-mail' type="email"  {...formik.getFieldProps('email')}/>
					{formik.touched.email && formik.errors.email
						? (<div className={style.error}>{formik.errors.email}</div>)
						: null
					}
				</div>
				<div className={style.loginInner}>
					<SuperInputText theme={theme} placeholder='password' type={showPassword ? 'text' : 'password'} {...formik.getFieldProps('password')}/>
					<img src={eye} className={style.passIcon} onClick={changeViewPass}/>
					{formik.touched.password && formik.errors.password
						? <div className={style.error}>{formik.errors.password}</div>
						: null
					}
				</div>
				<div className={style.loginCheckboxInner}>
					<label htmlFor='rememberMe' className={style.loginLabel}>Remember me</label>
					<SuperCheckbox theme={theme}
						id="rememberMe"
						type="rememberMe"
						{...formik.getFieldProps('rememberMe')}
					/>
				</div>

				<SuperButton theme={theme} disabled={disable}>Sign in</SuperButton>
			</form>
			<NavLink className={`${style.link} ${theme === 'dark' ? style.dark : style.light}`} to={PATH.RECOVERY_PASSWORD}>Forgot your password?</NavLink>
			<NavLink className={`${style.link} ${theme === 'dark' ? style.dark : style.light}`} to={PATH.REGISTRATION}>Go to sign up</NavLink>
		</div>
	);
}
