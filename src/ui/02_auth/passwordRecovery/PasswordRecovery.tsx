import React, {FC} from 'react';
import s from './PasswordRecovery.module.scss';
import {useFormik} from 'formik';
import SuperButton from '../../06_common/c2-SuperButton/SuperButton';
import SuperInputText from '../../06_common/c1-SuperInputText/SuperInputText';
import style from '../registration/Registration.module.scss';
import {sendEmailTC} from '../../../bll/reducers/recoveryPassword-reducer';
import {useDispatch} from 'react-redux';

type  FormikErrorType = {
	email?: string
}

type PasswordRecoveryPropsType = {
	theme?: string
	recoveryError: string | null
}

export const PasswordRecovery: FC<PasswordRecoveryPropsType> = ({theme,recoveryError}) => {
	const dispatch = useDispatch()

	const formik = useFormik({
		initialValues: {
			email: '',
		},
		validate: (values) => {
			const errors: FormikErrorType = {}

			if (!values.email) {
				errors.email = 'Email is required';
			}

			return errors;
		},
		onSubmit: values => {
			dispatch(sendEmailTC(values.email))
			// alert(JSON.stringify(values));
			formik.resetForm()
		},
	})

	return (
		<div className={s.box}>
			<h1 className={s.recTitle}>Recover Password</h1>
			<p className={s.recSubTitle}>Please, enter your email</p>
			{recoveryError ? <div className={s.recError}>{recoveryError}</div> : null}
			<form onSubmit={formik.handleSubmit}>
				<SuperInputText theme={theme} placeholder='e-mail' type="email" {...formik.getFieldProps('email')}/>
				{formik.touched.email && formik.errors.email
					? (<div className={style.error}>{formik.errors.email}</div>)
					: null
				}
				<SuperButton>Send</SuperButton>
			</form>
		</div>
	);
}
