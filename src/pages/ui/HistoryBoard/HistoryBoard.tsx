//SCSS Module imports
import style from './HistoryBoard.module.scss'

//Node_module imports
import { Link, useLocation } from 'react-router-dom'
import { FC } from 'react'

//Utils imports
import createBreadcrumbs from '@/utils/breadcrumbs'

interface IComponentProps {
	themetitle?: string | undefined
}

const HistoryBoard: FC<IComponentProps> = ({ themetitle }) => {
	const { pathname } = useLocation()
	
	//Get Category title when user is in a Category Themes Page
	const title = pathname
		.replace('/category/', '')
		.split('/')[1]
		.split('%20')
		.join(' ')

	const res = createBreadcrumbs(pathname, title, themetitle)

	return (
		<nav className={style.navigation_body}>
			<div className={style.navigation_items}>
				{res.map((el, index) => (
					<Link
						to={el.path}
						key={`${index + Math.floor(Math.random() * 200)} ${pathname}`}
						className={style.navigation_item}
					>
						{el.title}
					</Link>
				))}
			</div>
			<Link className={style.navigation_activity} to='/'>
				<svg className={style.navigation_activity_icon} viewBox='0 0 512 512'>
					<path d='M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z' />
				</svg>
				<p>All Activity</p>
			</Link>
		</nav>
	)
}

export default HistoryBoard
