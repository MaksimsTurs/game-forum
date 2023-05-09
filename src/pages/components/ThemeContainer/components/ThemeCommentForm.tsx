//SCSS Module imports
import style from '../scss/ThemeCommentForm.module.scss'

//Node_modules imports
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//Interfaces imports
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IComment, ICommentState } from '@/store/commentStore/interfaces/comment.interfaces'
import { AppDispatch, RootState } from '@/store/store'

//Actions imports
import createNewComment from '@/store/commentStore/actions/comment.create.action'

const ThemeCommentForm: FC = () => {
	const [isActive, setActiv] = useState<boolean>(false)
	const [isDisabled, setDisabled] = useState<boolean>(false)
	const dispatch = useDispatch<AppDispatch>()

	const { pathname } = useLocation()

	const showeditor = () => {
		setActiv(true)
	}

	const { register, handleSubmit, reset } = useForm<IComment>()

	const { error } = useSelector<RootState, ICommentState>(state => state.commentSlice)

	const createComment: SubmitHandler<IComment> = async ({ text }) => {
		setDisabled(true)

		const token = localStorage.getItem('token') || 'undefined'
		const commentdata = {
			text,
			theme_id: pathname.replace('/theme/', ''),
		}

		dispatch(createNewComment({ token, commentdata }))
		reset()
		setTimeout(() => {
			if(!error) {
				setDisabled(false)
			} else {
				setDisabled(true)
			}
		}, 2000)
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
				{error ? <div className={style.comment_error}>{String(error)}</div> : null}
			</div>
		</form>
	)
}

export default ThemeCommentForm
