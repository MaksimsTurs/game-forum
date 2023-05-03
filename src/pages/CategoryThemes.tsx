//Components imports
import { Fragment, FC } from 'react'
import HistoryBoard from './components/HistoryBoard/HistoryBoard'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import CategoryThemesHeader from './components/CategoryThemesHeader/CategoryThemesHeader'
import CategoryThemesContent from './components/SingleCategoryThemes/CategoryThemesContent'
import Loader from './components/Loader/Loader'

//Node_modules imports
import { useLocation } from 'react-router-dom'

//Services imports
import Themes from '../services/themes/themes.services'

const CategoryThemes: FC = () => {
	const { pathname } = useLocation()
	const id = pathname.replace('/category/', '').split('/')[0]

	const { categoryData, themeData, error, isLoading } = Themes.getAllThemes(id)

	if (error) throw error

	return (
		<Fragment>
			<Header />
			{isLoading ? (
				<Loader />
			) : (
				<Fragment>
					<main>
						<HistoryBoard />
						<CategoryThemesHeader
							title={categoryData?.title}
							description={categoryData?.descrption}
						/>
						<CategoryThemesContent themes={themeData} />
						<HistoryBoard themetitle={categoryData?.title} />
					</main>
				</Fragment>
			)}
			<Footer />
		</Fragment>
	)
}

export default CategoryThemes
