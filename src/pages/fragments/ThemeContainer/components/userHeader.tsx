//CSSS Modules imports
import style from '../scss/userHeader.module.scss'

//Interfaces imports
import { FC } from 'react'

//Image imports
import usericon from '../img/user_icon.png?format=webp&prest=thumbnail'

interface IComponentProps {
	userData: [
		name: string,
		role: string
	]
}

const UserHeader: FC<IComponentProps> = ({ userData }: IComponentProps) => {

	const [name, role] = userData.map(el => el)

	return (
		<div className={style.detail_header}>
			<div className={style.detail_header_top}>
				<div className={style.detail_header_top_body}>
					<img src={usericon} alt='User icon' loading='lazy'/>
					<div className={style.detail_user_data}>
						<h2>{name}</h2>
						<h3>{role === 'admin' ? `Root ${role[0].toUpperCase()}${role.split('a')[1]}` : 'Member'}</h3>
					</div>
				</div>
			</div>
			<div className={style.detail_header_down}>
				<div className={style.detail_user_info_container}>
					<div className={style.detail_user_info}>
						<p>POSTS</p>
						<p>21,761</p>
					</div>
					<div className={style.detail_user_info}>
						<p>JOINED</p>
						<p>February 14, 2006</p>
					</div>
					<div className={style.detail_user_info}>
						<p>LAST VISITED</p>
						<p>6 hours ago</p>
					</div>
					<div className={style.detail_user_info}>
						<p>DAYS WON</p>
						<p>899</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserHeader
