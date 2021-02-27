import React, {FC, useState} from 'react';
import style from './Registration.module.scss';
import SuperInputText from '../../06_common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../06_common/c2-SuperButton/SuperButton';
import {useFormik} from 'formik';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../05_routes/Routes';
import {RequestErrorType, RequestStatusType} from '../../../bll/reducers/app-reducer';
import {useDispatch} from 'react-redux';
import {signUpTC} from '../../../bll/reducers/registration-reducer';


type RegistrationPropsType = {
	theme?: string
	status: RequestStatusType
	registrationError: RequestErrorType
}

type  FormikErrorType = {
	email?: string
	password?: string
	confirmPassword?: string
}

export const Registration: FC<RegistrationPropsType> = ({theme, status, registrationError}) => {
	const dispatch = useDispatch();
	const [disable, setDisable] = useState<boolean>(false)
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
			if (!values.confirmPassword) {
				errors.confirmPassword = 'Password is required';
			}
			if (values.password !== values.confirmPassword) {
				errors.confirmPassword = 'Passwords are not equal';
			}
			if (formik.errors.email || formik.errors.password || formik.errors.confirmPassword) {
				if (Object.keys(errors).length === 0) {
					setDisable(false)
				} else {
					setDisable(true)
				}
			}

			return errors;
		},
		onSubmit: values => {
			dispatch(signUpTC(values))
			// alert(JSON.stringify(values));
			setDisable(true)
			formik.resetForm()
		},
	})


	return (
		<div className={style.regWrapper}>
			<h1 className={style.regTitle}>Sign up</h1>
			<p className={style.regSubTitle}>Please fill in the form below</p>
			{registrationError ? <div className={style.regError}>{registrationError}</div> : null}
			<form className={style.regBox} onSubmit={formik.handleSubmit}>
				<div className={style.regInner}>
					<SuperInputText theme={theme} placeholder='e-mail' type="email"  {...formik.getFieldProps('email')}/>
					{formik.touched.email && formik.errors.email
						? (<div className={style.error}>{formik.errors.email}</div>)
						: null
					}
				</div>
				<div className={style.regInner}>
					<SuperInputText theme={theme} placeholder='password' type="password" {...formik.getFieldProps('password')}/>
					{formik.touched.password && formik.errors.password
						? <div className={style.error}>{formik.errors.password}</div>
						: null
					}
				</div>
				<div className={style.regInner}>
					<SuperInputText theme={theme} placeholder='confirm password'
													type="password" {...formik.getFieldProps('confirmPassword')}/>
					{formik.touched.confirmPassword && formik.errors.confirmPassword
						? <div className={style.error}>{formik.errors.confirmPassword}</div>
						: null
					}
				</div>
				<SuperButton theme={theme}
										 disabled={disable}>Sign up</SuperButton>
			</form>

			<NavLink className={`${style.link} ${theme === 'dark' ? style.dark : style.light}`} to={PATH.LOGIN}>Go to sign in</NavLink>
		</div>
	);
}
