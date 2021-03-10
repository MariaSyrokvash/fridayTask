import React, {FC, useState} from 'react';
import s from './NewPassword.module.scss'
import SuperInputText from '../../06_common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../06_common/c2-SuperButton/SuperButton';
import {useDispatch} from 'react-redux';
import {useFormik} from 'formik';
import {sendNewPasswordTC} from '../../../bll/reducers/newPassword-reducer';
import {useParams} from 'react-router-dom';
import Loader from '../../06_common/c5-Loader/Loader';
import {RequestStatusType} from '../../../bll/reducers/recoveryPassword-reducer';
import eye from '../q3-signUp/image/eye.svg';
import {Toaster} from 'react-hot-toast';

type NewPasswordPropsType = {
	theme?: string
	// successMessage: string
	// errorMessage: string
	status: RequestStatusType
}

type FormikErrorType = {
	password?: string
	confirmPassword?: string
}

type ParamTypes = {
	token: string
}

export const NewPassword: FC<NewPasswordPropsType> = ({theme, status}) => {
	const dispatch = useDispatch()
	const [showPassword, setShowPassword] = useState<boolean>(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
	const {token} = useParams<ParamTypes>()

	const changeViewPass = () => setShowPassword(!showPassword)
	const changeViewConfirmPass = () => setShowConfirmPassword(!showConfirmPassword)

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
			dispatch(sendNewPasswordTC(values.password, token))
			formik.resetForm()
		},
	})


	return (
		<div className={s.box}>
			<h1 className={s.newPassTitle}>New Password</h1>
			<p className={s.newPassSubTitle}>Please, enter your email</p>
			<Toaster/>
			<form onSubmit={formik.handleSubmit}>
				<div className={s.newPassInner}>
					<SuperInputText theme={theme} placeholder='password' type={showPassword ? 'text' : 'password'} {...formik.getFieldProps('password')}/>
					<img src={eye} className={s.passIcon} onClick={changeViewPass}/>
					{formik.touched.password && formik.errors.password
						? <div className={s.newPassError}>{formik.errors.password}</div>
						: null
					}
				</div>
				<div className={s.newPassInner}>
					<SuperInputText theme={theme} placeholder='confirm password'
													type={showConfirmPassword ? 'text' : 'password'} {...formik.getFieldProps('confirmPassword')}/>
					<img src={eye} className={s.passConfIcon} onClick={changeViewConfirmPass}/>
					{formik.touched.confirmPassword && formik.errors.confirmPassword
						? <div className={s.newPassError}>{formik.errors.confirmPassword}</div>
						: null
					}
				</div>
				<SuperButton className={s.sendBtn}>Send</SuperButton>
				{status === 'loading' ? <Loader /> : null}
			</form>
		</div>
	);
}
