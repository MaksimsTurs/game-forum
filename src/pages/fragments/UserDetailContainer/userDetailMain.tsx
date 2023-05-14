//Interfaces imports
import { FC } from 'react'

//Components imports
import UserAchivments from './components/userAchivments'
import UserVisitors from './components/userVisitors'

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
