//Components imports
import RegistrationForm from './components/RegistrationForm'
import FacebookButton from '../FacebookButton/FacebookButton'

//Interfaces imports
import { FC } from 'react'

const RegistrationContainer: FC = () => {
	return (
		<div style={{ display: 'flex', marginTop: `${1}rem` }}>
			<RegistrationForm />
			<FacebookButton />
		</div>
	)
}

export default RegistrationContainer
