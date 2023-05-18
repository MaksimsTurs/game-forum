//Node_module imports
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//Componetns imports
import { FC, Fragment, useEffect } from 'react'
import HistoryBoard from '@/pages/ui/HistoryBoard/HistoryBoard'
import Footer from '@/pages/ui/Footer/Footer'
import Header from '@/pages/ui/Header/Header'
import CategoryThemesHeader from '@/pages/ui/CategoryThemesHeader/CategoryThemesHeader'
import Theme from '@/pages/fragments/ThemeContainer/Theme'
import Loader from '@/pages/ui/Loader/Loader'

//Actions imports
import getSingleTheme from '@/store/themeStore/actions/themes.getsingletheme.actions'

//Interfaces imports
import { AppDispatch, RootState } from '@/store/store'
import { IThemesState } from '@/store/themeStore/interfaces/themes.interfaces'

const SingleTheme: FC = () => {
	const { pathname } = useLocation()
	const id = pathname.replace('/theme/', '')
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(getSingleTheme(id))
	}, [])

	const { isLoading, themedata } = useSelector<RootState, IThemesState>(
		state => state.themesSlice
	)

	return (
		<Fragment>
			{isLoading ? (
				<Loader />
			) : (
				<Fragment>
					<Header />
					<main>
						<HistoryBoard themetitle={themedata[0]?.title} />
						<CategoryThemesHeader
							title={themedata[0]?.title}
							themedata={themedata[0]}
						/>
						<Theme themedata={themedata[0]} />
						<HistoryBoard themetitle={themedata[0]?.title} />
					</main>
					<Footer />
				</Fragment>
			)}
		</Fragment>
	)
}

export default SingleTheme
