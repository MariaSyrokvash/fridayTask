import React, {FC} from 'react';
import s from './PasswordRecovery.module.scss';
import {useFormik} from 'formik';
import SuperButton from '../../06_common/c2-SuperButton/SuperButton';
import SuperInputText from '../../06_common/c1-SuperInputText/SuperInputText';
import {RequestStatusType, sendEmailTC} from '../../../bll/reducers/recoveryPassword-reducer';
import {useDispatch} from 'react-redux';
import Loader from '../../06_common/c5-Loader/Loader';

type  FormikErrorType = {
	email?: string
}

type PasswordRecoveryPropsType = {
	theme?: string
	recoveryError: string | null
	recoverySuccess: string | null
	status: RequestStatusType
}

export const PasswordRecovery: FC<PasswordRecoveryPropsType> = ({theme,recoveryError,recoverySuccess, status}) => {
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
			formik.resetForm()
		},
	})


	return (
		<div className={s.box}>
			<h1 className={s.recTitle}>Recover Password</h1>
			<p className={s.recSubTitle}>Please, enter your email</p>
			{recoveryError ? <div className={s.recError}>{recoveryError}</div> : null}
			{recoverySuccess ? <div className={s.recSuccess}>{recoverySuccess}</div> : null}
			<form onSubmit={formik.handleSubmit}>
				<div className={s.recInner}>
					<SuperInputText theme={theme} placeholder='e-mail' type="email" {...formik.getFieldProps('email')}/>
					{formik.touched.email && formik.errors.email
						? (<div className={s.recError}>{formik.errors.email}</div>)
						: null
					}
				</div>

				<SuperButton>Send</SuperButton>
				{status === 'loading' ? <Loader /> : null}
			</form>
		</div>
	);
}
