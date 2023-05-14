//SCSS Modules imports
import style from '@/pages/fragments/CategoryContainer/CategoryContainer.module.scss'

//Interfaces imports
import { FC, Dispatch, SetStateAction, useState } from 'react'

//Components imports
import Tooltip from '@/pages/ui/Tooltip/Tooltip'

interface IComponentProps {
	state: boolean
	setVisibility: Dispatch<SetStateAction<boolean>>
}

const CategoryHeader: FC<IComponentProps> = ({ setVisibility, state }) => {
	const [isVisible, setTooltip] = useState<boolean>(false)

	const changeVisibility = () => {
		setVisibility((prev: boolean) => !prev)
	}

	const checkTooltip = () => {
		setTooltip((prev: boolean) => !prev)
	}

	return (
		<div className={style.category_title_container}>
			<span>General</span>
			<div
				className={`${style.category_change_button} ${style.category_bordered}`}
        onClick={changeVisibility}
				onMouseEnter={checkTooltip}
				onMouseLeave={checkTooltip}
      >
				<Tooltip state={isVisible} text='Hidde this Category'/>
				{state ? '+' : '-'}
			</div>
		</div>
	)
}

export default CategoryHeader
