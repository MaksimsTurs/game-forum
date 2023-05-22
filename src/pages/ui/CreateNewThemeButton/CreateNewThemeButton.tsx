//SCSS Modules imports
import style from './CreateNewThemeButton.module.scss'

//Interfaces imports
import { FC } from 'react'

//Node_modules imports
import { Link } from 'react-router-dom'

interface IComponentProps {
	id: string
	context: string
}

const CreateNewThemeButton: FC<IComponentProps> = ({ id, context }) => {
	const styleName = context === 'home' ? 'home' : 'themes'

	return (
		<Link
			to={`/${id}/create-theme`}
			className={
				styleName === 'home'
					? `${style.create_theme_button} ${style.create_button_smaller}`
					: `${style.create_theme_button} ${style.create_button_normal}`
			}
		>
			Create new theme
		</Link>
	)
}

export default CreateNewThemeButton
