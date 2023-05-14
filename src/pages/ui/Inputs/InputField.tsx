//SCSS Modules imports
import style from './InputField.module.scss'

//Intrefaces imports
import { FC } from 'react'
import { IRegistrationForm } from '../LoginForm/interfaces/form.interfaces'

//Node_modules imports
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface IComponentProps {
	text: string
	type: string
	fieldName:
		| 'password'
		| 'confirmPassword'
		| 'name'
		| 'terms'
		| 'updateNotification'
		| 'email'
	placeholder: string
	register: UseFormRegister<IRegistrationForm>
	error: FieldErrors<IRegistrationForm>
	errorText: string
}

const InputField: FC<IComponentProps> = ({
	error,
	placeholder,
	register,
	text,
	type,
	errorText,
	fieldName,
}) => {
	return (
		<div className={style.reg_form_input_container}>
			<label className={style.reg_form_label}>
				{text} <span>*</span>
			</label>
			<input
				className={style.reg_form_input}
				type={type}
				placeholder={`${placeholder}`}
				{...register(fieldName, {
					required: errorText,
				})}
			/>
			{error && (
				<div className={style.reg_form_error_message}>
					{error[fieldName]?.message}
				</div>
			)}
		</div>
	)
}

export default InputField
