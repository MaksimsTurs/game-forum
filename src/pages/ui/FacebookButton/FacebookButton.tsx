//SCSS Module imports
import style from './FacebookButton.module.scss'

//Component imports
import Button from './components/Button'

//Interfaces imports
import { FC } from 'react'

const FacebookButton: FC = () => {
	return (
		<div className={style.facebok_button_container}>
			<section className={style.facebook_button_header}>
				<h5>Get started faster</h5>
				<p>Connect via one these site</p>
			</section>
			<Button />
		</div>
	)
}

export default FacebookButton
