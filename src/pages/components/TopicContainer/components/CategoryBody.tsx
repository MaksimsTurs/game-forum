//SCSS Module imports
import style from '../scss/CategoryBody.module.scss'

//Node_modules imports
import { Link } from 'react-router-dom'

//Image import
//@ts-ignore
import usericon from './../img/user_icon.png?format=webp&preset=thumbnail '

import { FC } from 'react'

interface IComponentProps {
	data: any,
	src: string
}

const CategoryBody: FC<IComponentProps> = ({data, src}: IComponentProps) => {

	return (
		<section className={style.category_content_container}>
			<div className={style.category_info_container}>
				<div className={style.category_info_body}>
					<img
						src={src}
						alt='News Icon'
						width={30}
						height={30}
						style={{ marginRight: 0.5 + 'rem' }}
					/>
					<div className={style.category_category_info}>
						<Link className={style.category_category_link} to={`/category/${data._id}/${data.title}`}>
							{
								data.title
							}
						</Link>
						<p className={style.category_category_description}>
							{
								data.description
							}
						</p>
					</div>
				</div>
				<div className={style.category_count}>
					<p className={style.category_count_num}>3.2k</p>
					<p className={style.category_category_description}>posts</p>
				</div>
			</div>
			<div className={style.category_comment_continaer}>
				<img
					className={style.category_icon}
					src={usericon}
					alt='UserIcon'
					placeholder='blur'
				/>
				<div className={style.category_last_comment}>
					<Link className={style.category_category_link} to={'/'}>
						4.7.9: No theme updates necessary Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Necessitatibus hic cum vero culpa.
						Neque quos dicta non facere veniam aspernatur optio modi odit enim
						corrupti numquam, tenetur magni obcaecati quia?
					</Link>
					<p className={style.category_category_description}>
						By nicolast, Wednesday at 02:20 PM
					</p>
				</div>
			</div>
		</section>
	)
}

export default CategoryBody
