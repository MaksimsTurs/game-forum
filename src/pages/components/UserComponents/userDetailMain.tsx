//Interfaces imports
import { FC, Fragment } from 'react'
import { RootState } from '../../../store/hook'
import { IUserInfo } from '../../../store/userStore/interfaces/user.interfaces'

//Components imports
import UserAchivments from './components/userAchivments'
import UserVisitors from './components/userVisitors'
import Loader from '../Loader/Loader'

//Node_module imports
import { useSelector } from 'react-redux'

const UserDetailMain: FC = () => {
	return (
		<div style={{ display: 'flex', margin: `${1}rem ${0}rem` }}>
			<UserVisitors />
			<div style={{ width: `${100}%` }}>
				<UserAchivments />
			</div>
		</div>
	)
}

export default UserDetailMain
