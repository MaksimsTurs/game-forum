//SCSS Module imports
import style from './CategoryThemesHeader.module.scss'

//Node_modules imports
import { useLocation, Link } from 'react-router-dom'

//Interfaces imports
import { FC } from 'react'
import { IThemeData } from '@/store/themeStore/interfaces/themes.interfaces'

//Image imports
import usericon from './img/user_icon.png?format=webp&preset=thumbnail'

interface IComponentProps {
	themedata?: IThemeData
	title: string | undefined
	description?: string | undefined
}

const CategoryThemesHeader: FC<IComponentProps> = ({ title, themedata, description }: IComponentProps) => {
	const { pathname } = useLocation()

	return (
		<div className={style.header_container}>
			<div className={style.header_title_container}>
				<h2 className={style.header_title}>{title}</h2>
				<h3 className={style.header_description}>{description}</h3>
			</div>
			<div className={style.header_follow_container}>
				{pathname.match('theme') ? (
					<div className={style.header_theme_info}>
						<img
							className={style.header_author_icon}
							src={usericon}
							alt='User icon'
							loading='lazy'
						/>
						<div>
							<Link className={style.header_author_name} to={'/'}>
								{themedata?.author}
							</Link>
							<p className={style.header_date}>April 6, 2022 in News</p>
						</div>
					</div>
				) : null}
				<div className={style.header_follow_content}>
					<p className={style.header_follow}>Followers</p>
					<p className={style.header_follow_count}>17</p>
				</div>
			</div>
		</div>
	)
}

export default CategoryThemesHeader
