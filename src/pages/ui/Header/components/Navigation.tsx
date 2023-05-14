//SCSS Modules imports
import style from '../scss/Navigation.module.scss'

//Node_modules imports^b
import { Link } from 'react-router-dom'

//Interfaces imports
import { FC } from 'react'

const Navigation: FC = () => {
	return (
		<nav className={style.header_nav}>
			<h1 className={style.header_logo}>
				<Link to='/'>
					Onlie
					<span>RPG</span>
				</Link>
			</h1>
			<ul className={style.header_nav_items}>
				<li className={style.header_nav_item}>
					<svg className={style.header_icon} viewBox='0 0 640 512'>
						<path d='M608 288h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z'></path>
						<path d='M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32z'></path>
					</svg>
					<p>Users</p>
				</li>
				<li className={style.header_nav_item}>
					<svg className={style.header_icon} viewBox='0 0 512 512'>
						<path d='M76 160h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12H76a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12zM0 224v208a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V224z'></path>
						<path d='M464 32H48A48 48 0 0 0 0 80v144h512V80a48 48 0 0 0-48-48zM128 148a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12zm320 0a12 12 0 0 1-12 12H188a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h248a12 12 0 0 1 12 12z'></path>
					</svg>
					<p>Official Website</p>
				</li>
				<li className={style.header_nav_item}>
					<svg className={style.header_icon} viewBox='0 0 576 512'>
						<path d='M352 287.9H162.3L79.5 350a9.7 9.7 0 0 1-15.5-7.8V288a64.06 64.06 0 0 1-64-64V64A64.06 64.06 0 0 1 64 0h288a64.06 64.06 0 0 1 64 64v160a63.91 63.91 0 0 1-64 63.9z'></path>
						<path d='M576 224v160a64.06 64.06 0 0 1-64 64h-32v54.3a9.7 9.7 0 0 1-15.5 7.8L381.7 448H256a64.06 64.06 0 0 1-64-64v-64h160a96.15 96.15 0 0 0 96-96v-64h64a64.06 64.06 0 0 1 64 64z'></path>
					</svg>
					<p>Forum</p>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
