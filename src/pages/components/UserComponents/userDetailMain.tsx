//Interfaces imports
import { FC } from 'react'

//Components imports
import UserAchivments from './components/userAchivments'

const UserDetailMain: FC = () => {
	return (
		<div style={{ display: 'flex', marginTop: `${1}rem` }}>
			<UserAchivments />
		</div>
	)
}

export default UserDetailMain
