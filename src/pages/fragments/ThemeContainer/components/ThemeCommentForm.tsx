//SCSS Module imports
import style from '../scss/ThemeCommentForm.module.scss'

//Node_modules imports
import { useState, useMemo, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'

//Interfaces imports
import { FC, FormEvent } from 'react'
import { AppDispatch, RootState } from '@/store/store'
import { IUserState } from '@/store/userStore/interfaces/user.interfaces'
import { ICommentState } from '@/store/commentStore/interfaces/comment.interfaces'

//Actions imports
import createNewComment from '@/store/commentStore/actions/comment.create.action'

const ThemeCommentForm: FC = () => {
	const [isActive, setActiv] = useState<boolean>(false)
	const [text, setText] = useState('')
	const [frontError, setError] = useState<string>('')

	const dispatch = useDispatch<AppDispatch>()
	const { pathname } = useLocation()

	const writeLine = useCallback((value: string) => {
		setText(value)
	}, [])

	const options = useMemo(
		() => ({
			spellChecker: false,
			maxHeight: '14rem',
			autofocus: true,
			placeholder: 'Write your text her...',
			status: false,
			autosave: {
				uniqueId: Math.floor((Math.random() * 30000) / 5000).toString(),
				enabled: true,
				delay: 1000,
			},
		}),
		[]
	)

		const { error } = useSelector<RootState, ICommentState>(state => state.commentSlice)

	const { token } = useSelector<RootState, IUserState>(
		state => state.userSlice
	)

	const showEditor = () => {
		setActiv(true)
	}

	const createComment = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if(!token) return setError('You have no permissition to write Comments!')

		const commentData = {
			token,
			text,
			theme_id: pathname.replace('/theme/', ''),
		}

		dispatch(createNewComment(commentData))
		setText('')
		setError('')
	}


	return (
		<form
			onSubmit={createComment}
			className={style.comment_form_container}
			onClick={showEditor}
		>
			<div
				className={
					isActive ? style.comment_editor : style.comment_editor_hidden
				}
			>
				<SimpleMDE value={text} onChange={writeLine} options={options} />
				<button
					type='submit'
					className={
						isActive ? style.comment_submit_button : style.comment_editor_hidden
					}
				>
					Submit
				</button>
			</div>
			{!isActive && <div className={style.comment_helper}>Click to write comment!</div>}
			<div className={(frontError || error) ? style.comment_error : ''}>
					{frontError || error}
			</div>
		</form>	
	)
}

export default ThemeCommentForm
