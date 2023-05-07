//SCSS Module imports
import style from './Theme.module.scss'

//Image imports
//@ts-ignore
import usericon from './img/user_icon.png?format=webp&preset=thumbnail'

//Node_modules imports
import { Link, useLocation } from 'react-router-dom'

//Interfaces imports
import { FC, Fragment } from 'react'
import { IThemeData } from '@/services/themes/interfaces/themes.interfaces'
import { IComment } from '@/services/comment/interfaces/comment.interfaces'

//Components imports
import ThemeComment from './components/ThemeComment'
import ThemeCommentForm from './components/ThemeCommentForm'

//Services imports
import Comment from '@/services/comment/comment.services'

interface IComponentProps {
	themedata: IThemeData | undefined
}

const Theme: FC<IComponentProps> = ({ themedata }: IComponentProps) => {
	const { pathname } = useLocation()
	const id = pathname.replace('/theme/', '')
	
	const { data, error } = Comment.getAllComments(id)
	
	if (error) throw error

	return (
		<Fragment>
			{themedata && (
				<div className={style.theme_container}>
					<article className={style.theme_content}>
						<div className={style.theme_body}>
							<section className={style.theme_user_container}>
								<h2 className={style.theme_user_name}>{themedata.author}</h2>
								<Link className={style.theme_user_icon} to={'/'}>
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
								<p className={style.theme_user_role}>Root Admin</p>
								<p className={style.theme_max_replies}>&#128172; 21.4K</p>
							</section>
							<aside>
								<div className={style.theme_post_info_container}>
									<p className={style.theme_public_date}>
										Posted April 6, 2022
									</p>
								</div>
								<div>
									<p className={style.theme_theme_text}>{themedata.text}</p>
								</div>
							</aside>
						</div>
						<div className={style.theme_history_container}>
							<p className={style.theme_history}>
								<span>1 yr</span> {themedata.author} changed the title to Theme
								updates: 4.6.12
							</p>
						</div>
					</article>
					{data?.map((comment: IComment) => (
						<ThemeComment key={comment._id} comment={comment} />
					))}
				</div>
			)}
			<ThemeCommentForm />
		</Fragment>
	)
}

export default Theme
