//SCSS Module imports
import style from './LoginForm.module.scss'

//Components imports
import Button from '../FacebookButton/components/Button'

//Node_modules imports
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

//Interfaces imports
import { ILoginForm } from './interfaces/form.interfaces.ts'
import { FC } from 'react'
import { AppDispatch, RootState } from '@/store/store.ts'
import { IUserState } from '@/store/userStore/interfaces/user.interfaces.ts'

//Actions imports
import userLogin from '@/store/userStore/actions/user.login.action.ts'

interface IComponentProps {
	state: boolean
}

const LoginForm: FC<IComponentProps> = ({ state }) => {
	const dispatch = useDispatch<AppDispatch>()

	const { error } = useSelector<RootState, IUserState>(
		state => state.userSlice
	)

	const { register, handleSubmit, reset } = useForm<ILoginForm>()
	const login: SubmitHandler<ILoginForm> = async userData => {
		dispatch(userLogin(userData))
		reset()
	}

	return (
		<form
			className={
				state
					? `${style.log_form} ${style.visible}`
					: `${style.log_form} ${style.hidden}`
			}
			onSubmit={handleSubmit(login)}
		>
			<div className={style.log_form_container}>
				<h3 className={style.log_header_title}>Sign in</h3>
				<input
					className={style.log_input}
					type='text'
					placeholder='Your Name'
					{...register('name')}
				/>
				<input
					className={style.log_input}
					type='password'
					placeholder='Your Password'
					{...register('password')}
				/>
				<button className={style.log_button}>Log in</button>
				{error && <div className={style.log_error_message}>{error}</div>}
			</div>
			<Button />
		</form>
	)
}

export default LoginForm
