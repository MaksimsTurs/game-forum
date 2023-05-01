//SCSS Module import
import style from '../scss/ForumStatistic.module.scss'

//Interfaces imports
import { FC } from 'react'

const ForumStatistic: FC = () => {
	return (
		<section className={style.forum_statistic_container}>
			<div className={style.forum_statistic_header}>
				<h2>Forum statistics</h2>
			</div>
			<div className={style.forum_statistic_content}>
				<div className={style.forum_stats}>
					<p className={style.forum_stats_count}>13K</p>
					<p className={style.forum_stats_title}>Total Topics</p>
				</div>
				<div className={style.forum_stats}>
					<p className={style.forum_stats_count}>62.2K</p>
					<p className={style.forum_stats_title}>Total Posts</p>
				</div>
			</div>
		</section>
	)
}

export default ForumStatistic
