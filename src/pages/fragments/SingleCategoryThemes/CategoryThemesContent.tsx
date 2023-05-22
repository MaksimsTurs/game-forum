//SCSS Module imports
import style from './CategoryThemes.module.scss'

//Image import
import usericon from './img/user_icon.png?format=webp&prest=thumbnail'

//Node_modules imports
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

//Interfaces imports
import { FC } from 'react'
import {
	ICloseThemeAction,
	IThemeData,
} from '@/store/themeStore/interfaces/themes.interfaces'
import { IUserState } from '@/store/userStore/interfaces/user.interfaces'
import { RootState, AppDispatch } from '@/store/store'

//Actions imports
import closeTheme from '@/store/themeStore/actions/theme.close.action'

interface IComponentProps {
	theme: IThemeData | undefined
}

const CategoryThemesContent: FC<IComponentProps> = ({ theme }) => {
	const dispatch = useDispatch<AppDispatch>()
	const { role, token } = useSelector<RootState, IUserState>(
		state => state.userSlice
	)

	const closeCurrentTheme = () => {
		const closeData: ICloseThemeAction = {
			token,
			theme_id: theme?._id,
		}
		dispatch(closeTheme(closeData))
	}

	return (
		<article className={style.themes_theme_container}>
			<div className={style.themes_main_info}>
				{true && (
					<button
						onClick={closeCurrentTheme}
						hidden={!theme?.locked && role !== 'admin'}
						disabled={theme?.locked}
						className={
							theme?.locked
								? style.themes_lock_button_disable
								: style.themes_lock_button_enable
						}
					>
						<span>&#128274;</span>
					</button>
				)}
				<Link className={style.themes_info_title} to={`/theme/${theme?._id}`}>
					{theme?.title}
				</Link>
				<h3 className={style.themes_info_undertitle}>
					By {theme?.author}, April 5
				</h3>
			</div>
			<div className={style.themes_popularity_container}>
				<p className={style.themes_info_title}>{theme?.reply} replies</p>
				<p className={style.themes_info_undertitle}>{theme?.views} views</p>
			</div>
			<div className={style.themes_last_comment}>
				<img
					className={style.themes_user_icon}
					src={usericon}
					alt='User icon'
					loading='lazy'
				/>
				<div className={style.themes_comment_container}>
					<Link className={style.themes_info_title} to={`/`}>
						{theme?.author}
					</Link>
					<p className={style.themes_info_undertitle}>April 5</p>
				</div>
			</div>
		</article>
	)
}

export default CategoryThemesContent
