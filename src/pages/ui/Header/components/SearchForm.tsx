//SCSS Module imports
import style from '../scss/SearchFrom.module.scss'

//Node_modules imports
import { useState, useRef, useEffect } from 'react'

//Interfaces imports
import { FC } from 'react'

const SearchForm: FC = () => {
	const [filter, setFilter] = useState<string>('Everywhere')
	const [inputValue, setInputValue] = useState<string>('')
	const [isVisible, setVisible] = useState<boolean>(false)

	const filterArray: string[] = ['Everywhere', 'Topic', 'Members']

	const formRef = useRef<HTMLFormElement>(null)

	const changeFilter = (event: any) => {
		setFilter(event.target.textContent)
	}

	const changeInputValue = (event: any) => {
		setInputValue(event.target.value)
	}

	//TODO: Create custom hook "useModal" for Modals containers
	const showFilter = (event: any) => {
		if (event.type === 'mouseover') {
			setVisible(true)
		} else if (inputValue.trim() === '' && event.type == 'mouseleave') {
			setTimeout(() => setVisible(false), 2000)
		}
	}

	useEffect(() => {
		const clickHandler = (event: any) => {
			if (inputValue.trim() !== '') {
				return
			} else if (formRef.current && !formRef.current.contains(event.target)) {
				setVisible(false)
			}
		}

		document.addEventListener('click', clickHandler)

		return () => {
			document.removeEventListener('click', clickHandler)
		}
	})

	return (
		<form
			ref={formRef}
			className={style.header_form}
			onMouseOver={showFilter}
			onMouseLeave={showFilter}
		>
			<input
				className={style.header_form_input}
				type='text'
				value={inputValue}
				onChange={changeInputValue}
			/>
			<div
				className={
					isVisible
						? `${style.header_form_container} ${style.visible}`
						: `${style.header_form_container} ${style.hidden}`
				}
			>
				<p>{filter}</p>
				<svg className={style.header_filter_icon} viewBox='0 0 320 512'>
					<path d='M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z' />
				</svg>
				<ul className={style.header_form_items}>
					{filterArray.map((data, index) => {
						return (
							<li
								key={index}
								className={style.header_form_item}
								onClick={changeFilter}
							>
								<svg
									className={style.header_filter_check}
									viewBox='0 0 448 512'
								>
									<path d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
								</svg>
								{data}
							</li>
						)
					})}
				</ul>
			</div>
			<button className={style.header_submit}>
				<span className={style.header_submit_icon}>&#9906;</span>
			</button>
		</form>
	)
}

export default SearchForm
