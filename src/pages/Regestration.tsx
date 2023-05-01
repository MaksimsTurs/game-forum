//Components imports
import { Fragment } from 'react'
import Header from './components/Header/Header'
import HistoryBoard from './components/HistoryBoard/HistoryBoard'
import RegistrationContainer from './components/Registration/RegistrationContainer'
import Footer from './components/Footer/Footer'

//React imports
import { FC } from 'react'

const Registration: FC = () => {
	return (
		<Fragment>
			<Header />
			<main>
				<HistoryBoard />
				<RegistrationContainer />
				<HistoryBoard />
			</main>
			<Footer />
		</Fragment>
	)
}

export default Registration
