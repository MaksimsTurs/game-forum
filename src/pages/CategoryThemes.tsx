//SCSS Module imports
import style from './fragments/SingleCategoryThemes/CategoryThemes.module.scss'

//Components imports
import { Fragment, FC, useEffect } from 'react'
import HistoryBoard from './ui/HistoryBoard/HistoryBoard'
import Footer from './ui/Footer/Footer'
import Header from './ui/Header/Header'
import CategoryThemesHeader from './ui/CategoryThemesHeader/CategoryThemesHeader'
import CategoryThemesContent from './fragments/SingleCategoryThemes/CategoryThemesContent'
import Loader from './ui/Loader/Loader'
import ThemesNavigation from './fragments/SingleCategoryThemes/components/ThemesNavigation'

//Interfaces imports
import { RootState, AppDispatch } from '@/store/store'
import { IThemesState } from '@/store/themeStore/interfaces/themes.interfaces'

//Node_modules imports
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

//Actions imports
import getAllThemes from '@/store/themeStore/actions/themes.getall.action'

const CategoryThemes: FC = () => {
	const { pathname } = useLocation()
	const id = pathname.replace('/category/', '').split('/')[0]
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(getAllThemes(id))
	}, [])

	const { isLoading, categorydata, themedata } = useSelector<
		RootState,
		IThemesState
	>(state => state.themesSlice)

	return (
		<Fragment>
			{isLoading ? (
				<Loader />
			) : (
				<Fragment>
					<Header />
					<main>
						<HistoryBoard />
						<CategoryThemesHeader
							id={id}
							title={categorydata?.title}
							description={categorydata?.description}
						/>
						<div className={style.themes_container}>
							<ThemesNavigation />
							{
								themedata.map(data => <CategoryThemesContent key={data._id} theme={data} />)
							}						
						</div>
						<HistoryBoard themetitle={categorydata?.title} />
					</main>
					<Footer />
				</Fragment>
			)}
		</Fragment>
	)
}

export default CategoryThemes
