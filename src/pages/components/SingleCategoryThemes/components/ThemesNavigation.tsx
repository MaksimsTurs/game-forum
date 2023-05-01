//SCSS Module imports
import style from '../scss/ThemesNavigation.module.scss'

//Node_modules imports
import { useState, useRef, useEffect } from 'react'

//Components imports
import SortForm from './SortForm'

//Interfaces imports
import { FC } from 'react'

const ThemesNavigation: FC = () => {
	const [isVisiblePagination, setVisiblePagination] = useState<boolean>(false)
	const paginationRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const clickHandler = (event: any) => {
			if (
				paginationRef.current &&
				!paginationRef.current.contains(event.target)
			) {
				setVisiblePagination(false)
			} else {
				setVisiblePagination(true)
			}
		}

		document.addEventListener('click', clickHandler)

		return () => {
			document.removeEventListener('click', clickHandler)
		}
	})

	return (
		<nav className={style.themes_nav_container}>
			<div className={style.themes_pages_content}>
				<ul className={style.themes_pages_list}>
					<li className={style.themes_navigation_buttonos}>1</li>
					<li className={style.themes_navigation_buttonos}>2</li>
				</ul>
				<button className={style.themes_navigation_buttonos}>Next</button>
				<button className={style.themes_navigation_buttonos}>&#187;</button>
				<div ref={paginationRef} className={style.themes_pagination_container}>
					<p>Page 1 of 10</p>
					<form
						className={
							isVisiblePagination
								? `${style.themes_pagination_form} ${style.visible}`
								: `${style.themes_pagination_form} ${style.hidden}`
						}
					>
						<input
							className={style.themes_pagination_input}
							placeholder='Page number'
							type='number'
						/>
						<div className={style.themes_pagination_button}>Go</div>
					</form>
				</div>
			</div>
			<SortForm />
		</nav>
	)
}

export default ThemesNavigation
