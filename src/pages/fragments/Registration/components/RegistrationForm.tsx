//SCSS Module imports
import style from '../Registration.module.scss'

//Node_modules imports
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//Actions imports
import userRegistration from '@/store/userStore/actions/user.registration.action.ts'

//Components imports
import InputField from '@/pages/ui/Inputs/InputField.tsx'
import CheckboxField from '@/pages/ui/Inputs/CheckboxInput.tsx'
import Loader from '@/pages/ui/Loader/Loader.tsx'

//Interfaces imports
import { IRegistrationForm } from '../interfaces/form.interfaces.ts'
import { AppDispatch, RootState } from '@/store/store.ts'
import { IUserState } from '@/store/userStore/interfaces/user.interfaces.ts'
import { FC, Fragment } from 'react'

const RegistrationForm: FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()
	const { isLoading } = useSelector<RootState, IUserState>(
		state => state.userSlice
	)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IRegistrationForm>()
	const registration: SubmitHandler<IRegistrationForm> = async userData => {
		dispatch(userRegistration(userData))
		reset()
		navigate('/')
	}

	return (
		<Fragment>
			{isLoading ? (
				<Loader />
			) : (
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
						<InputField
							text='Display Name'
							type='text'
							placeholder='Name'
							fieldName='name'
							register={register}
							errorText='Name is required field'
							error={errors}
						/>
						<InputField
							text='Display Email'
							type='email'
							placeholder='E-mail'
							fieldName='email'
							register={register}
							errorText='E-mail is required field'
							error={errors}
						/>
						<InputField
							text='Display Password'
							type='password'
							placeholder='Password'
							fieldName='password'
							register={register}
							errorText='Password is required field'
							error={errors}
						/>
						<InputField
							text='Confirm Password'
							type='password'
							placeholder='Conforim Password'
							fieldName='confirmPassword'
							register={register}
							errorText='Confirm Password is required field'
							error={errors}
						/>
					</section>
					<section className={style.reg_form_section_checkbox}>
						<CheckboxField
							text='Send me Notification'
							register={register}
							fieldName='updateNotification'
							id='update-notification'
							htmlFor='update-notification'
						/>
						<CheckboxField
							text='I agree to the Terms of Use and Privacy Policy'
							fieldName='terms'
							register={register}
							error={errors}
							errorText='You must term policity accept'
							id='terms'
							htmlFor='terms'
						/>
					</section>
					<div className={style.reg_submit_container}>
						<button>Create my Account</button>
					</div>
				</form>
			)}
		</Fragment>
	)
}

export default RegistrationForm
