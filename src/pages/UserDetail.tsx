//Inrefaces imports
import { FC, Fragment } from 'react'

//Components imports
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HistoryBoard from './components/HistoryBoard/HistoryBoard'
import UserDetailMain from './components/UserComponents/userDetailMain'
import UserHeader from './components/UserComponents/components/userHeader'

const UserDetail: FC = () => {
	return (
		<Fragment>
			<Header />
			<main>
				<HistoryBoard />
				<UserHeader />
				<UserDetailMain />
				<HistoryBoard />
			</main>
			<Footer />
		</Fragment>
	)
}
export default UserDetail
