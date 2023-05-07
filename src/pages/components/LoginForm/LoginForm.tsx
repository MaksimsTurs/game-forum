//SCSS Module imports
import style from './LoginForm.module.scss'

//Components imports
import Button from '../FacebookButton/components/Button'

//Node_modules imports
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

//Interfaces imports
import { ILoginForm } from './interfaces/form.interfaces.ts'
import { FC } from 'react'
import { AppDispatch } from '@/store/hook.ts'

//Actions imports
import { userLogin } from '@/store/userStore/user.actions.ts'

interface IComponentProps {
	state: boolean
}

const LoginForm: FC<IComponentProps> = ({ state }: IComponentProps) => {
	const dispatch = useDispatch<AppDispatch>()

	const { register, handleSubmit, reset } = useForm<ILoginForm>()
	const login: SubmitHandler<ILoginForm> = async userData => {
		dispatch(userLogin({ userData }))
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
					placeholder='Type your email or name hier'
					{...register('name')}
				/>
				<input
					className={style.log_input}
					type='password'
					placeholder='Type your password hier'
					{...register('password')}
				/>
				<button className={style.log_button}>Log in</button>
			</div>
			<Button />
		</form>
	)
}

export default LoginForm
