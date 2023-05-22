//Components imports
import { FC, Fragment  } from 'react'
import HistoryBoard from './ui/HistoryBoard/HistoryBoard'
import CategoryContainer from './fragments/CategoryContainer/CategoryContainer'
import Footer from './ui/Footer/Footer'
import Header from './ui/Header/Header'

const Home: FC = () => {

	return (
		<Fragment>
			<Header/>
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
