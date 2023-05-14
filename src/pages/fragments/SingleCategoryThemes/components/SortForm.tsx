//SCSS Module imports
import style from '../scss/SortForm.module.scss'

//Node_modules imports
import { useEffect, useState, useRef } from 'react'

//Interfaces imports
import { FC } from 'react'

//Custom Hooks
import useModal from '@/customHooks/useModal.hook'

const SortForm: FC = () => {
	const [isVisibleSort, setVisibleSort] = useState<boolean>(false)
	const sortRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const clickHandler = (event: any) => {
			const newState = useModal(sortRef, event, isVisibleSort)
			setVisibleSort(newState)
		}

		document.addEventListener('click', clickHandler)

		return () => document.removeEventListener('click', clickHandler)
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
			<form
				className={
					isVisibleSort
						? `${style.themes_sort_form} ${style.visible}`
						: `${style.themes_sort_form } ${style.hidden}`
				}
			>
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
