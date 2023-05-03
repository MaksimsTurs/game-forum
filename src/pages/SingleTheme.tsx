//Node_module imports
import { useLocation } from 'react-router-dom'

//Componetns imports
import { FC, Fragment } from 'react'
import HistoryBoard from './components/HistoryBoard/HistoryBoard'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import CategoryThemesHeader from './components/CategoryThemesHeader/CategoryThemesHeader'
import Theme from './components/ThemeContainer/Theme'

//Services imports
import Themes from '../services/themes/themes.services'
import Loader from './components/Loader/Loader'

const SingleTheme: FC = () => {
	const { pathname } = useLocation()
	const id = pathname.replace('/theme/', '')

	const { data, error, isLoading } = Themes.getSingleTheme(id)

	if (error) throw error

	return (
		<Fragment>
			<Header />
			{isLoading ?
			<Loader/> :
				<Fragment>
					<main>
						<HistoryBoard themetitle={data?.title} />
						<CategoryThemesHeader title={data?.title} />
						<Theme data={data} />
						<HistoryBoard themetitle={data?.title} />
					</main>
				</Fragment>
			}
			<Footer />
		</Fragment>
	)
}

export default SingleTheme
