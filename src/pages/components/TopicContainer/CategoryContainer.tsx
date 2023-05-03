//Components imports
import ForumStatistic from './components/ForumStatistic.tsx'
import Comments from './components/LastComments'
import CategoryBody from './components/CategoryBody'

//React imports
import { FC, Fragment, useState } from 'react'

//Services imports
import Category from '../../../services/category/category.services.ts'

//SCSS Module imports
import style from './CategoryContainer.module.scss'

//Image imports
import bugicon from './img/bug_icon.png?format=webp&preset=thumbnail'
import newsicon from './img/news_icon.png?format=webp&preset=thumbnail'
import guidicon from './img/guide_icon.png?format=webp&preset=thumbnail'
import tavervnicon from './img/discussion_icon.png?format=webp&preset=thumbnail'
import Loader from '../Loader/Loader.tsx'

const CategoryContainer: FC = () => {
	const [isHidden, setHidden] = useState<boolean>(false)

	const pngicon: string[] = [bugicon, newsicon, tavervnicon, guidicon]

	const categoryVisibility = () => {
		setHidden((prev: boolean) => !prev)
	}

	const { data, error, isLoading } = Category.getAllCategorie()

	if (error) throw new error

	return (
		<Fragment>
			{isLoading ? (
				<Loader />
			) : (
				<Fragment>
					<p className={`${style.category_title} ${style.category_border}`}>
						Forums
					</p>
					<div className={style.category_container}>
						<div className={style.category_body}>
							<div className={style.category_border}>
								<header
									className={
										isHidden
											? `${style.category_header} ${style.category_header_blind}`
											: style.category_header
									}
								>
									<p>General</p>
									<button
										onClick={categoryVisibility}
										className={style.category_hidde_button}
									>
										<p>{isHidden ? '+' : '-'}</p>
										<span className={style.category_toltip}>
											Toggle this category
										</span>
									</button>
								</header>
								<div className={isHidden ? style.hidden : style.category_body}>
									{data &&
										data.map((data: any, index: number) => (
											<CategoryBody
												key={data._id}
												data={data}
												src={pngicon[index]}
											/>
										))}
								</div>
							</div>
							<ForumStatistic />
						</div>
						<Comments />
					</div>
				</Fragment>
			)}
		</Fragment>
	)
}

export default CategoryContainer
