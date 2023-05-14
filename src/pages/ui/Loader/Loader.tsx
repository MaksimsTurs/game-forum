//SCSS Module imports
import style from './Loader.module.scss'

//Interfaces imports
import { FC } from 'react'

const Loader: FC = () => {
	return (
		<div className={style.loader_container}>
			<div className={style.loader}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default Loader
