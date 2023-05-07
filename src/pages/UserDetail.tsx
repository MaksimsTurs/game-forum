//Inrefaces imports
import { FC, Fragment } from 'react'
import { AppDispatch, RootState } from '@/store/hook'
import { IUserData } from '@/store/userStore/interfaces/user.interfaces'

//Components imports
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HistoryBoard from './components/HistoryBoard/HistoryBoard'
import UserDetailMain from './components/UserComponents/userDetailMain'
import UserHeader from './components/UserComponents/components/userHeader'
import Loader from './components/Loader/Loader'

//Node_modules imports
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//Actions imports
import { userCheck } from '@/store/userStore/user.actions'

const UserDetail: FC = () => {
	const { pathname } = useLocation()
	const id = pathname.replace('/user/', '')
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		//@ts-ignore
		dispatch(userCheck(id))
	}, [])

	const { name, role, isLoading } = useSelector<RootState, IUserData>(
		state => state.userCheckSlice
	)

	return (
		<Fragment>
			{isLoading ? (
				<Loader />
			) : (
				<Fragment>
					<Header />
					<main>
						<HistoryBoard themetitle={name} />
						<UserHeader userData={[name, role]} />
						<UserDetailMain />
						<HistoryBoard themetitle={name} />
					</main>
					<Footer />
				</Fragment>
			)}
		</Fragment>
	)
}
export default UserDetail
