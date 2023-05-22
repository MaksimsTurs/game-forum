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

	const { error, isLoading, themeSingle } = useSelector<
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
						<HistoryBoard themetitle={themeSingle?.title} />
						{error ? (
							<div
								style={{
									margin: '1rem 0rem',
									fontWeight: 'bolder',
									fontSize: '2rem',
									color: '#500',
								}}
							>
								{error}
							</div>
						) : (
							<Fragment>
								<CategoryThemesHeader
									title={themeSingle?.title}
									themeData={themeSingle}
								/>
								<Theme themedata={themeSingle} />
							</Fragment>
						)}

						<HistoryBoard themetitle={themeSingle?.title} />
					</main>
					<Footer />
				</Fragment>
			)}
		</Fragment>
	)
}

export default SingleTheme
