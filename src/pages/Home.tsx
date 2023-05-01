//Components imports
import { Fragment, FC  } from 'react'
import Header from './components/Header/Header'
import HistoryBoard from './components/HistoryBoard/HistoryBoard'
import CategoryContainer from './components/TopicContainer/CategoryContainer'
import Footer from './components/Footer/Footer'

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
