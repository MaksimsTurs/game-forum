//SCSS Module imports
import style from './CategoryContainer.module.scss'

//Components imports
import ForumStatistic from './components/ForumStatistic'
import Comments from './components/LastComments'
import CategoryBody from './components/CategoryBody'
import Loader from '@/pages/ui/Loader/Loader'
import CategoryHeader from '@/pages/fragments/CategoryHeader/CategoryHeader'

//Node_modules imports
import { FC, Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//Interfaces imports
import { AppDispatch, RootState } from '@/store/store.ts'
import {
	ICategory,
	ICategoryState,
} from '@/store/categoryStore/interfaces/category.interfaces.ts'

//Actions imports
import getAllCategorie from '@/store/categoryStore/actions/category.getall.action'

//Image imports
import bugicon from './img/bug_icon.png?format=webp&preset=thumbnail'
import newsicon from './img/news_icon.png?format=webp&preset=thumbnail'
import guidicon from './img/guide_icon.png?format=webp&preset=thumbnail'
import tavervnicon from './img/discussion_icon.png?format=webp&preset=thumbnail'

const CategoryContainer: FC = () => {
	const pngicon: string[] = [bugicon, newsicon, tavervnicon, guidicon]
	const [isHidden, setHidden] = useState<boolean>(false)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(getAllCategorie())
	}, [])

	const { categories, isLoading } = useSelector<RootState, ICategoryState>(
		state => state.categorySlice
	)

	return (
		<Fragment>
			{isLoading ? (
				<Loader />
			) : (
				<Fragment>
					<div className={style.category_container}>
						<div className={style.category_categories_container}>
							<section
								className={`${style.category_container_header} ${style.category_bordered}`}
							>
								<p>Forums</p>
							</section>
							<section className={style.category_bordered}>
								<CategoryHeader setVisibility={setHidden} state={isHidden} />
								<div
									className={
										isHidden
											? style.category_hidden
											: style.category_body_content
									}
								>
									{categories.map((el: ICategory, index: number) => (
										<CategoryBody data={el} key={el._id} src={pngicon[index]} />
									))}
								</div>
							</section>
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
