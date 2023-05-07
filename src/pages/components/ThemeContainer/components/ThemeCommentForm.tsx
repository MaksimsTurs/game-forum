//SCSS Module imports
import style from '../scss/ThemeCommentForm.module.scss'

//React imports
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

//Interfaces imports
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IComment } from '@/services/comment/interfaces/comment.interfaces'

//Services imports
import Comment from '@/services/comment/comment.services'

const ThemeCommentForm: FC = () => {
	const [isActive, setActiv] = useState<boolean>(false)
	const [isDisabled, setDisabled] = useState<boolean>(false)
	const [error, setError] = useState<string>('')

	const { pathname } = useLocation()

	const showeditor = () => {
		setActiv(true)
	}

	const { register, handleSubmit, reset } = useForm<IComment>()

	const createComment: SubmitHandler<IComment> = async ({ text }) => {
		setDisabled(true)
		const token = localStorage.getItem('token')
		const role = localStorage.getItem('role')

		const data = {
			text,
			theme_id: pathname.replace('/theme/', ''),
		}

		switch (role) {
			case 'guest':
				setDisabled(true)
				setError('You have no permision to do this, pls Log-in or Create a new account!')
				break
			case 'admin':
				await Comment.createComment(token!, data)
				break
			case 'user':
				await Comment.createComment(token!, data)
				break
		}

		reset()
	}

	return (
		<form
			onSubmit={handleSubmit(createComment)}
			className={style.comment_form_container}
		>
			<div
				onClick={showeditor}
				className={
					isActive ? `${style.comment_input_active}` : `${style.comment_input}`
				}
			>
				<section
					className={
						isActive
							? style.comment_editor_container
							: `${style.comment_editor_container} ${style.hidden}`
					}
				>
					<button className={style.comment_editor_option}>
						<b>B</b>
					</button>
					<button className={style.comment_editor_option}>
						<em>B</em>
					</button>
					<button className={style.comment_editor_option}>
						<u>B</u>
					</button>
					<button className={style.comment_editor_option}>
						<s>B</s>
					</button>
				</section>
				<textarea placeholder='Type some one' {...register('text')} />
			</div>
			<div className={isActive ? style.comment_footer : style.hidden}>
				<button
					className={
						isDisabled
							? style.submit_button_disabled
							: style.comment_submit_button
					}
					disabled={isDisabled}
				>
					Submit
				</button>
				{error && <div className={style.comment_error}>{error}</div>}
			</div>
		</form>
	)
}

export default ThemeCommentForm
