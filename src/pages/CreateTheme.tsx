//Interfaces imports
import { FC, Fragment } from 'react'

//Component imports
import Header from './ui/Header/Header'
import Footer from './ui/Footer/Footer'
import HistoryBoard from './ui/HistoryBoard/HistoryBoard'
import CreateThemeContainer from './fragments/CreateThemeContainer/CreateThemeContainer'

const CreateTheme: FC = () => {
	return (
		<Fragment>
			<Header />
			<main>
				<HistoryBoard themetitle='Create new theme' />
				<CreateThemeContainer />
				<HistoryBoard themetitle='Create new theme' />
			</main>
			<Footer />
		</Fragment>
	)
}

export default CreateTheme
