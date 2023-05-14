//Components imports
import { Fragment, FC  } from 'react'
import Header from './ui/Header/Header'
import HistoryBoard from './ui/HistoryBoard/HistoryBoard'
import CategoryContainer from './fragments/CategoryContainer/CategoryContainer'
import Footer from './ui/Footer/Footer'

const Home: FC = () => {

	return (
		<Fragment>
				<Header />
			<main>
				<HistoryBoard />
				<CategoryContainer />
				<HistoryBoard />
			</main>
			<Footer/>
		</Fragment>
	)
}

export default Home
