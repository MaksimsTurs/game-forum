//SCSS Module imports
import style from '../Registration.module.scss'

//Node_modules imports
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

//Actions imports
import { userAuth } from '../../../../store/userStore/user.actions.ts'

//Interfaces imports
import { IRegistrationForm } from '../interfaces/form.interfaces.ts'
import { AppDispatch } from '../../../../store/hook.ts'
import { FC } from 'react'

const RegistrationForm: FC = () => {
	const dispatch = useDispatch<AppDispatch>()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IRegistrationForm>()
	const registration: SubmitHandler<IRegistrationForm> = async userData => {
		//@ts-ignore
		dispatch(userAuth(userData))
		reset()
	}

	return (
		<form
			onSubmit={handleSubmit(registration)}
			className={style.reg_form_container}
		>
			<div className={style.reg_form_header}>
				<h2>Sign Up</h2>
				<Link className={style.reg_sign_link} to='/sign-up'>
					<p>Existing user?</p> Sign In
				</Link>
			</div>
			<section className={style.reg_form_section}>
				<div className={style.reg_form_input_container}>
					<label className={style.reg_form_label} htmlFor='user-name'>
						Display Name <span>*</span>
					</label>
					<input
						className={style.reg_form_input}
						type='text'
						{...register('name', {
							required: 'Name is a required field',
						})}
					/>
					{errors && (
						<div className={style.reg_form_error_message}>
							{errors.name?.message}
						</div>
					)}
				</div>
				<div className={style.reg_form_input_container}>
					<label className={style.reg_form_label} htmlFor='email-adress'>
						Email Address <span>*</span>
					</label>
					<input
						className={style.reg_form_input}
						type='text'
						{...register('email', {
							required: 'Email is a required field',
						})}
					/>
					{errors && (
						<div className={style.reg_form_error_message}>
							{errors.email?.message}
						</div>
					)}
				</div>
				<div className={style.reg_form_input_container}>
					<label className={style.reg_form_label} htmlFor='password'>
						Password <span>*</span>
					</label>
					<input
						className={style.reg_form_input}
						type='password'
						{...register('password', {
							required: 'Password is a required field',
						})}
					/>
					{errors && (
						<div className={style.reg_form_error_message}>
							{errors.password?.message}
						</div>
					)}
				</div>
				<div className={style.reg_form_input_container}>
					<label className={style.reg_form_label} htmlFor='confirm-password'>
						Confirm Password <span>*</span>
					</label>
					<input
						className={style.reg_form_input}
						type='password'
						{...register('confirmPassword', {
							required: 'Confirm password is a required fiel',
						})}
					/>
					{errors && (
						<div className={style.reg_form_error_message}>
							{errors.confirmPassword?.message}
						</div>
					)}
				</div>
			</section>
			<section className={style.reg_form_section_checkbox}>
				<div className={style.reg_form_input_container}>
					<input
						className={style.reg_checkbox_input}
						type='checkbox'
						{...register('updateNotification')}
					/>
					<label className={style.reg_checkbox_label} htmlFor='notification'>
						Send me news and updates
					</label>
				</div>
				<div className={style.reg_form_input_container}>
					<input
						className={style.reg_checkbox_input}
						type='checkbox'
						{...register('terms', {
							required: 'You must term policity accept',
						})}
					/>
					<label className={style.reg_checkbox_label} htmlFor='terms-policy'>
						I agree to the Terms of Use and Privacy Policy <span>*</span>
					</label>
					{errors && (
						<div className={style.reg_form_error_message}>
							{errors.terms?.message}
						</div>
					)}
				</div>
			</section>
			<div className={style.reg_submit_container}>
				<button>Create my Account</button>
			</div>
		</form>
	)
}

export default RegistrationForm
