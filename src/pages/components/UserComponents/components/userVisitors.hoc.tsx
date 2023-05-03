//SCSS Module imports
import style from '../scss/userVisitors.module.scss'

//Interfaces imports
import { FC, ReactNode } from 'react'

interface IComponentsProps {
	children: ReactNode
	title: string
}

const UserVisitorsHoc: FC<IComponentsProps> = ({
	children,
	title,
}: IComponentsProps) => {
	return (
		<div className={`${style.visitors_body} ${style.border}`}>
			<div className={style.visitors_header}>{title}</div>
			{children}
		</div>
	)
}

export default UserVisitorsHoc
