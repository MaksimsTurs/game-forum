//SCSS Module imports
import style from '../scss/LastComments.module.scss'

//Interfaces imports
import { FC } from 'react'

//Node_modules imports
import { Link } from 'react-router-dom'

//Image imports
import usericon from './../img/user_icon.png?format=webp&preset=thumbnail'

const LastComments: FC = () => {
	return (
		<div className={style.comments_container}>
			<div className={style.comments_header}>
				<h2>Recent News</h2>
			</div>
			<div className={style.comments_main_container}>
				<img
					className={style.comments_user_icon}
					src={usericon}
					alt='User Icon'
					placeholder='blur'
				/>
				<div className={style.comments_main_info}>
					<div className={style.comments_overflow}>
						<Link className={style.comments_topic_link} to={'/'}>
							4.7.9: No theme updates necessary Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quae ipsum saepe autem nihil eveniet libero aut blanditiis harum. Earum nostrum beatae libero laudantium fuga at aperiam sequi, voluptas eveniet?
						</Link>
					</div>
					<p className={style.comments_author}>Ehren</p>
					<p className={style.comments_public_date}>
						Started Wednesday at 01:49 AM
					</p>
				</div>
				<div>
					<div className={style.comments_replies_count}>120</div>
				</div>
			</div>
		</div>
	)
}

export default LastComments