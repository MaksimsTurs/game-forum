//Components imports
import RegistrationForm from './components/RegistrationForm'
import FacebookButton from '@/pages/ui/FacebookButton/FacebookButton'

//Interfaces imports
import { FC } from 'react'

const RegistrationContainer: FC = () => {
	return (
		<div style={{ display: 'flex', margin: `${1}rem ${0}rem` }}>
			<RegistrationForm />
			<FacebookButton />
		</div>
	)
}

export default RegistrationContainer
