//CSSS Modules imports
import style from '../scss/userHeader.module.scss'

//Interfaces imports
import { FC } from 'react'

//Image imports
import usericon from '../img/user_icon.png?format=webp&preset=thumbnail'

const UserHeader: FC = () => {
	return (
		<div className={style.detail_header}>
			<div className={style.detail_header_top}>
				<div className={style.detail_header_top_body}>
					<img src={usericon} alt='User icon' />
					<div className={style.detail_user_data}>
						<h2>Ehren</h2>
						<h3>Root Admin</h3>
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
