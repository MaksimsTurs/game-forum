//SCSS Module imports
import style from './CategoryThemes.module.scss'

//Components imports
import ThemesNavigation from './components/ThemesNavigation'

//Image import
import usericon from './img/user_icon.png?format=webp&preset=thumbnail'

//Node_modules imports
import { Link } from 'react-router-dom'

//Interfaces imports
import { FC } from 'react'
import { IThemeData } from '@/store/themeStore/interfaces/themes.interfaces'

interface IComponentProps {
	themes: IThemeData[] | undefined
}

const CategoryThemesContent: FC<IComponentProps> = ({
	themes,
}: IComponentProps) => {
	return (
		<div className={style.themes_container}>
			<ThemesNavigation />
			{themes?.map((theme: IThemeData) => (
				<article className={style.themes_theme_container} key={theme._id}>
					<div className={style.themes_main_info}>
						<Link
							className={style.themes_info_title}
							to={`/theme/${theme._id}`}
						>
							{theme.title}
						</Link>
						<h3 className={style.themes_info_undertitle}>
							By {theme.author}, April 5
						</h3>
					</div>
					<div className={style.themes_popularity_container}>
						<p className={style.themes_info_title}>{theme.reply} replies</p>
						<p className={style.themes_info_undertitle}>{theme.views} views</p>
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
								nicolast
							</Link>
							<p className={style.themes_info_undertitle}>April 5</p>
						</div>
					</div>
				</article>
			))}
		</div>
	)
}

export default CategoryThemesContent
	