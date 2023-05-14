//SCSS Modules imports
import style from './CheckboxInput.module.scss'

//Intrefaces imports
import { FC } from 'react'
import { IRegistrationForm } from '../LoginForm/interfaces/form.interfaces'

//Node_modules imports
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface IComponentProps {
	text: string
	htmlFor: string
	id: string
	fieldName: 'terms' | 'updateNotification'
	register: UseFormRegister<IRegistrationForm>
	error?: FieldErrors<IRegistrationForm>
	errorText?: string
}

const CheckboxField: FC<IComponentProps> = ({
	error,
	register,
	text,
	errorText,
	fieldName,
	htmlFor,
	id,
}) => {
	return (
		<div className={style.reg_form_input_container}>
			<input
				id={id}
				type='checkbox'
				{...register(fieldName, {
					required: errorText,
				})}
			/>
			<label className={style.reg_checkbox_label} htmlFor={htmlFor}>
				{text} {fieldName === 'terms' && <span>*</span>}
			</label>
			{error && (
				<div className={style.reg_form_error_message}>
					{error[fieldName]?.message}
				</div>
			)}
		</div>
	)
}

export default CheckboxField
