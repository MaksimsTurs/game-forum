//Inrefaces imports
import { FC, Fragment } from 'react'
import { AppDispatch, RootState } from '@/store/store'
import { IUserDataState } from '@/store/userStore/interfaces/user.interfaces'

//Components imports
import Header from './ui/Header/Header'
import Footer from './ui/Footer/Footer'
import HistoryBoard from '@/pages/ui/HistoryBoard/HistoryBoard'
import UserDetailMain from './fragments/UserDetailContainer/userDetailMain'
import UserHeader from './fragments/UserDetailContainer/components/userHeader'
import Loader from './ui/Loader/Loader'

//Node_modules imports
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//Actions imports
import userCheck from '@/store/userStore/actions/user.check.action'

const UserDetail: FC = () => {
	const { pathname } = useLocation()
	const id = pathname.replace('/user/', '')
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(userCheck(id))
	}, [])

	const { name, role, isLoading } = useSelector<RootState, IUserDataState>(
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
						<UserHeader name={name} role={role}/>
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
