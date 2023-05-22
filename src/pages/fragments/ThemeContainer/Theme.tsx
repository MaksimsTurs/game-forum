//SCSS Module imports
import style from './Theme.module.scss'

//Image imports
import usericon from './img/user_icon.png?format=webp&prest=thumbnail'

//Node_modules imports
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FC, Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import SimpleMDE from 'react-simplemde-editor'

//Interfaces imports
import { IThemeData } from '@/store/themeStore/interfaces/themes.interfaces'
import { RootState, AppDispatch } from '@/store/store'
import {
	IComment,
	ICommentState,
} from '@/store/commentStore/interfaces/comment.interfaces'
import { IUserState } from '@/store/userStore/interfaces/user.interfaces'

//Components imports
import ThemeComment from './components/ThemeComment'
import ThemeCommentForm from './components/ThemeCommentForm'

//Actions imports
import getAllComments from '@/store/commentStore/actions/comment.getall.action'
import changeTheme from '@/store/themeStore/actions/theme.change.action'

interface IComponentProps {
	themedata: IThemeData | undefined
}

const Theme: FC<IComponentProps> = ({ themedata }) => {
	const [text, setText] = useState<string>(themedata?.text || '')
	const [editMode, setEditMode] = useState<boolean>(false)

	const { pathname } = useLocation()
	const id = pathname.replace('/theme/', '')

	const dispatch = useDispatch<AppDispatch>()

	const { comments } = useSelector<RootState, ICommentState>(
		state => state.commentSlice
	)

	const userId = useSelector<RootState, IUserState>(state => state.userSlice)

	const editTheme = () => setEditMode(true)
	const resetState = () => {
		setEditMode(false)
		setText(themedata?.text || '')
	}
	const writeLine = useCallback((value: string) => setText(value), [])

	const changeHanlder = () => {
		const body = {
			themeId: themedata?._id || '',
			text,
		}
		dispatch(changeTheme(body))
	}

	useEffect(() => {
		dispatch(getAllComments(id))
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

	return (
		<Fragment>
			{
				<div className={style.theme_container}>
					<article className={style.theme_content}>
						<div className={style.theme_body}>
							<section className={style.theme_user_container}>
								<h2 className={style.theme_user_name}>{themedata?.author}</h2>
								<Link
									className={style.theme_user_icon}
									to={`/user/${themedata?.author_id}`}
								>
									<svg
										className={style.theme_author_pane_bange}
										viewBox='0 0 512 512'
									>
										<path d='M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z' />
									</svg>
									<img
										className={style.theme_user_icon}
										src={usericon}
										alt='User icon'
										placeholder='blur'
									/>
								</Link>
								<p className={style.theme_user_role}>Root Adim</p>
								<p className={style.theme_max_replies}>&#128172; 21.4K</p>
							</section>
							<aside style={{ width: `${100}%` }}>
								<div className={style.theme_post_info_container}>
									<p className={style.theme_public_date}>
										Posted April 6, 2022
									</p>
								</div>
								{editMode ? (
									<SimpleMDE
										className={style.theme_theme_text}
										value={text}
										onChange={writeLine}
										options={options}
									/>
								) : (
									<ReactMarkdown
										className={style.theme_theme_text}
										children={themedata?.text || ''}
									/>
								)}
							</aside>
						</div>
						<div className={style.theme_history_container}>
							<p className={style.theme_history}>
								<span>1 yr</span> {themedata?.author} changed the title to Theme
								updates: 4.6.12
							</p>
							{themedata?.author_id === userId.id ? (
								editMode ? (
									<div>
										<button
											onClick={resetState}
											className={`${style.theme_edit_button} ${style.theme_edit_close}`}
										>
											Close
										</button>
										<button
											onClick={changeHanlder}
											className={style.theme_edit_button}
										>
											Change
										</button>
									</div>
								) : (
									<button
										onClick={editTheme}
										className={style.theme_edit_button}
									>
										Edit theme
									</button>
								)
							) : null}
						</div>
					</article>
					{comments?.map((comment: IComment) => (
						<ThemeComment key={comment._id} comment={comment} />
					))}
				</div>
			}
			{themedata?.locked ? (
				<div className={style.theme_locked_message}>
					This Theme is Locked for new Comments!
				</div>
			) : (
				<ThemeCommentForm />
			)}
		</Fragment>
	)
}

export default Theme
