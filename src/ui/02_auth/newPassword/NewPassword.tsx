import React, {FC} from 'react';
import s from './NewPassword.module.scss'
import SuperInputText from '../../06_common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../06_common/c2-SuperButton/SuperButton';
import {useDispatch} from 'react-redux';
import {useFormik} from 'formik';
import {sendNewPasswordTC} from '../../../bll/reducers/newPassword-reducer';
import {useParams} from 'react-router-dom';

type NewPasswordPropsType = {
	theme?: string
	successMessage: string
	errorMessage: string
}

type FormikErrorType = {
	password?: string
	confirmPassword?: string
}

type ParamTypes = {
	token: string
}

export const NewPassword: FC<NewPasswordPropsType> = ({theme, successMessage,errorMessage}) => {
	const dispatch = useDispatch()
	const {token} = useParams<ParamTypes>()

	const formik = useFormik({
		initialValues: {
			password: '',
			confirmPassword: ''
		},
		validate: (values) => {
			const errors: FormikErrorType = {}

			if (!values.password) {
				errors.password = 'Password is required';
			}
			if (!values.confirmPassword) {
				errors.confirmPassword = 'Password is required';
			}
			if (values.password !== values.confirmPassword) {
				errors.confirmPassword = 'Passwords are not equal';
			}

			return errors;
		},
		onSubmit: values => {
			debugger
			dispatch(sendNewPasswordTC(values.password, token))
			// alert(JSON.stringify(values));
			formik.resetForm()
		},
	})


	return (
		<div className={s.box}>
			<h1 className={s.newPassTitle}>New Password</h1>
			<p className={s.newPassSubTitle}>Please, enter your email</p>
			{errorMessage ? <div className={s.newPassError}>{errorMessage}</div> : null}
			{successMessage ? <div className={s.newPassSuccess}>{successMessage}</div> : null}
			<form onSubmit={formik.handleSubmit}>
				<div className={s.newPassInner}>
					<SuperInputText theme={theme} placeholder='password' type="password" {...formik.getFieldProps('password')}/>
					{formik.touched.password && formik.errors.password
						? <div className={s.newPassError}>{formik.errors.password}</div>
						: null
					}
				</div>
				<div className={s.newPassInner}>
					<SuperInputText theme={theme} placeholder='confirm password'
													type="password" {...formik.getFieldProps('confirmPassword')}/>
					{formik.touched.confirmPassword && formik.errors.confirmPassword
						? <div className={s.newPassError}>{formik.errors.confirmPassword}</div>
						: null
					}
				</div>
				<SuperButton>Send</SuperButton>
			</form>
		</div>
	);
}
