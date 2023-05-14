//Components imports
import { Fragment } from 'react'
import Header from '@/pages/ui/Header/Header'
import HistoryBoard from '@/pages/ui/HistoryBoard/HistoryBoard'
import RegistrationContainer from '@/pages/fragments/Registration/RegistrationContainer'
import Footer from '@/pages/ui/Footer/Footer'

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
