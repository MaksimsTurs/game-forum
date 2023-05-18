//SCSS Module imports
import style from '../Theme.module.scss'

//Interfaces imports
import { FC, useState } from 'react'
import { RootState, AppDispatch } from '@/store/store'
import { IUserRegistration } from '@/store/userStore/interfaces/user.interfaces'
import { IComment } from '@/store/commentStore/interfaces/comment.interfaces'

//Node_modules imports
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

//Image imports
import usericon from '../img/user_icon.png?format=webp&prest=thumbnail'

//Actions imports
import deleteComment from '@/store/commentStore/actions/comment.delete.action'

interface IComponentProps {
	comment: IComment
}

const ThemeComment: FC<IComponentProps> = ({ comment }: IComponentProps) => {
	const [isDeleted, setDeleted] = useState<boolean>(false)
	const dispatch = useDispatch<AppDispatch>()

	const { role } = useSelector<RootState, IUserRegistration>(state => state.userAuthSlice)
	const _id = comment._id

	const deletecomment = () => {
		const body = { role, _id }
		setTimeout(() =>	dispatch(deleteComment(body)), 250)
		setDeleted(true)
	}

	return (
		<article className={isDeleted ? style.theme_comment_deleted : `${style.theme_content} ${style.theme_comment_animation}`}>
			<div className={style.theme_body}>
				<section className={style.theme_user_container}>
					<h2 className={style.theme_user_name}>{comment.author}</h2>
					<Link className={style.theme_user_icon} to={`/`}>
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
							loading='lazy'
						/>
					</Link>
					<p className={style.theme_user_role}>Root Admin</p>
					<p className={style.theme_max_replies}>&#128172; 21.4K</p>
				</section>
				<aside>
					<div className={style.theme_post_info_container}>
						<p className={style.theme_public_date}>Posted April 6, 2022</p>
					</div>
					<div>
						<p className={style.theme_theme_text}>{comment.text}</p>
					</div>
				</aside>
			</div>
			<div className={style.theme_history_container}>
				<p className={style.theme_history}>
					<span>1 yr</span> {comment.author} changed the title to Theme updates:
					4.6.12
				</p>
				{role === 'admin' ? (
					<p className={style.theme_delete_button} onClick={deletecomment}>
						Delete this Comment
					</p>
				) : null}
			</div>
		</article>
	)
}

export default ThemeComment
