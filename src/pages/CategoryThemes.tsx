//SCSS Module imports
import style from './fragments/SingleCategoryThemes/CategoryThemes.module.scss'

//Components imports
import { Fragment, FC, useEffect, lazy } from 'react'
import HistoryBoard from './ui/HistoryBoard/HistoryBoard'
import CategoryThemesHeader from './ui/CategoryThemesHeader/CategoryThemesHeader'
import CategoryThemesContent from './fragments/SingleCategoryThemes/CategoryThemesContent'
import ThemesNavigation from './fragments/SingleCategoryThemes/components/ThemesNavigation'
import Header from './ui/Header/Header'
import Footer from './ui/Footer/Footer'
const Loader = lazy(() => import('./ui/Loader/Loader'))

//Interfaces imports
import { RootState, AppDispatch } from '@/store/store'
import { IThemesState } from '@/store/themeStore/interfaces/themes.interfaces'

//Node_modules imports
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

//Actions imports
import getAllThemes from '@/store/themeStore/actions/theme.getall.action'

const CategoryThemes: FC = () => {
	const { pathname } = useLocation()
	const id = pathname.replace('/category/', '').split('/')[0]
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(getAllThemes({ id }))
	}, [])

	const { error, isLoading, categoryData, themeArray, pagination } = useSelector<
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
						{error ? (
							<div className={style.themes_error}>{error}</div>
						) : (
							<Fragment>
								<CategoryThemesHeader
									id={id}
									title={categoryData?.title}
									description={categoryData?.description}
								/>
								<div className={style.themes_container}>
									<ThemesNavigation page={pagination}/>
									{themeArray.map(data => (
										<CategoryThemesContent key={data._id} theme={data} />
									))}
								</div>
							</Fragment>
						)}
						<HistoryBoard themetitle={categoryData?.title} />
					</main>
					<Footer />
				</Fragment>
			)}
		</Fragment>
	)
}

export default CategoryThemes
