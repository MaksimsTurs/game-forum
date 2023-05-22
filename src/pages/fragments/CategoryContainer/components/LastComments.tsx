//SCSS Module imports
import style from '../scss/LastComments.module.scss'

//Interfaces imports
import { FC } from 'react'
import { RootState } from '@/store/store'
import { ICategoryState } from '@/store/categoryStore/interfaces/category.interfaces'

//Node_modules imports
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

//Image imports
import usericon from './../img/user_icon.png?format=webp&prest=thumbnail'

const LastComments: FC = () => {
	const { categories } = useSelector<RootState, ICategoryState>(
		state => state.categorySlice
	)

	return (
		<div className={style.comments_container}>
			<div className={style.comments_header}>
				<h2>Recent News</h2>
			</div>
			{
				categories.map(data => {
					if(data.last_comment === undefined) return null
					return (
						<div
							className={style.comments_main_container}
							key={data.last_comment.title}
						>
							<div className={style.comment_wrapper}>
								<img
									className={style.comments_user_icon}
									src={usericon}
									alt='User Icon'
									placeholder='blur'
								/>
								<div className={style.comments_main_info}>
									<div className={style.comments_overflow}>
										<Link
											className={style.comments_topic_link}
											to={`/theme/${data.last_comment.theme_id}`}
										>
											{data.last_comment.title}
										</Link>
									</div>
									<p className={style.comments_author}>
										{data.last_comment.author}
									</p>
									<p className={style.comments_public_date}>
										{data.last_comment.public_data}
									</p>
								</div>
							</div>
							<div>
								<div className={style.comments_replies_count}>120</div>
							</div>
						</div>
					)
				}
			)}
		</div>
	)
}

export default LastComments
