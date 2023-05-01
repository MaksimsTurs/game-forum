//Node_modules imports
import { useEffect, useState, useRef } from 'react'

//SCSS Module imports
import style from '../scss/SortForm.module.scss'

//Interfaces imports
import { FC } from 'react'

const SortForm: FC = () => {
	const [isVisibleSort, setVisibleSort] = useState<boolean>(false)
	const sortRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const clickHandler = (event: any) => {
			if (sortRef.current && !sortRef.current.contains(event.target)) {
				setVisibleSort(false)
			} else {
				setVisibleSort(true)
			}
		}

		document.addEventListener('click', clickHandler)

		return () => {
			document.removeEventListener('click', clickHandler)
		}
	})

	const sortProps: string[] = [
		'Recently Updated',
		'Title',
		'Start Date',
		'Most Viewed',
		'Most Replies',
		'Custom',
	]

	return (
		<div className={style.themes_sort_container} ref={sortRef}>
			<p>Sorted by &#9662;</p>
			<form className={isVisibleSort ? `${style.themes_sort_form} ${style.visible}` : `${style.themes_sort_form} ${style.hidden}`}>
				<ul className={style.themes_sort_list}>
					{sortProps.map((sort, index) => {
						return (
							<li key={index} className={style.themes_sort_item}>
								<input
									className={style.themes_custom_checkbox}
									type='radio'
									defaultChecked={false}
									id={sort}
									name='form-sort'
								/>
								<label className={style.themes_checkbox_label} htmlFor={sort}>
									{sort}
								</label>
							</li>
						)
					})}
				</ul>
			</form>
		</div>
	)
}

export default SortForm
