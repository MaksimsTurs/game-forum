//SCSS Module imports
import style from '../scss/CategoryBody.module.scss'

//Node_modules imports
import { Link } from 'react-router-dom'

//Image imports
//@ts-ignore
import usericon from './../img/user_icon.png?format=webp&preset=thumbnail '

//Interfaces imports
import { FC } from 'react'
import { ICategory } from '@/store/categoryStore/interfaces/category.interfaces'

interface IComponentProps {
	data: ICategory
	src: string
}

const CategoryBody: FC<IComponentProps> = ({ data, src }: IComponentProps) => {
	return (
		<section className={style.category_content_container}>
			<div className={style.category_info_container}>
				<div className={style.category_info_body}>
					<img
						src={src}
						alt='News Icon'
						width={30}
						height={30}
						loading='lazy'
						style={{ marginRight: 0.5 + 'rem' }}
					/>
					<div className={style.category_category_info}>
						<Link
							className={style.category_category_link}
							to={`/category/${data._id}/${data.title}`}
						>
							{data.title}
						</Link>
						<p className={style.category_category_description}>
							{data.description}
						</p>
					</div>
				</div>
				<div className={style.category_count}>
					<p className={style.category_count_num}>3.2k</p>
					<p className={style.category_category_description}>posts</p>
				</div>
			</div>
			<div className={style.category_comment_continaer}>
				<Link to={`/user/${data.last_comment.author_id}`}>
					<img
						className={style.category_icon}
						src={usericon}
						alt='UserIcon'
						placeholder='blur'
					/>
				</Link>
				<div className={style.category_last_comment}>
					<Link className={style.category_category_link} to={`theme/${data.last_comment.theme_id || ''}`}>
						{data.last_comment.title}
					</Link>
					<p className={style.category_category_description}>
						By {data.last_comment.author}, Wednesday at 02:20 PM
					</p>
				</div>
			</div>
		</section>
	)
}

export default CategoryBody
