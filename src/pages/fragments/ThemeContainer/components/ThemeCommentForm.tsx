//SCSS Module imports
import style from '../scss/ThemeCommentForm.module.scss'

//Node_modules imports
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//Interfaces imports
import { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
	IComment,
	ICommentState,
} from '@/store/commentStore/interfaces/comment.interfaces'
import { AppDispatch, RootState } from '@/store/store'

//Actions imports
import createNewComment from '@/store/commentStore/actions/comment.create.action'
import { IUserRegistration } from '@/store/userStore/interfaces/user.interfaces'

const ThemeCommentForm: FC = () => {
	const [isActive, setActiv] = useState<boolean>(false)
	const [errorMessage, setErrorMessage] = useState<string>('')
	const dispatch = useDispatch<AppDispatch>()

	const { pathname } = useLocation()

	const showeditor = () => {
		setActiv(true)
	}

	const { register, handleSubmit, reset } = useForm<IComment>()

	const { role } = useSelector<RootState, IUserRegistration>(
		state => state.userAuthSlice
	)
	const { error } = useSelector<RootState, ICommentState>(
		state => state.commentSlice
	)

	const createComment: SubmitHandler<IComment> = async ({ text }) => {
		const token = localStorage.getItem('token') || 'undefined'

		const commentdata = {
			text,
			theme_id: pathname.replace('/theme/', ''),
		}

		dispatch(createNewComment({ token, commentdata }))
		reset()
	}

	useEffect(() => {
		switch (error) {
			case 401:
				setErrorMessage('You need to Log-in or Sign-up to write new comment!')
				break
		}
		if (role !== 'guest') {
			setActiv(false)
			setErrorMessage('')
		}
	}, [error, role])

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
					className={style.comment_submit_button}
				>
					Submit
				</button>
				<div className={style.comment_error}>{errorMessage}</div>
			</div>
		</form>
	)
}

export default ThemeCommentForm
