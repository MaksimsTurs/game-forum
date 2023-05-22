//Interfaces imports
import { FC, Fragment } from 'react'
import { RootState } from '@/store/store'
import { IUserState } from '@/store/userStore/interfaces/user.interfaces'

//Node_modules imports
import { useSelector } from 'react-redux'

//SCSS Module imports
import style from '../scss/userVisitors.module.scss'

//Components imports
import UserVisitorsHoc from './userVisitors.hoc'

const UserVisitors: FC = () => {
	const {
		user: { name, lastViewers, followers },
	} = useSelector<RootState, IUserState>(state => state.userSlice)

	return (
		<section className={style.visitors_container}>
			<div className={style.visitors_gold_container}>
				<h5>{name} last won the day on April 23</h5>
				<h6>{name} had the most liked content!</h6>
			</div>
			<UserVisitorsHoc title={`${followers.length} Followers`}>
				{followers.length <= 0 ? (
					<div className={style.visitors_follower_warn}>{name} have no Followers</div>
				) : (
					<div className={style.visitors_followers_container}>
						{followers.map(data => {
							return (
								<img
									className={style.visitors_followers_icon}
									src={data.avatar}
									alt={data.avatar}
									loading='lazy'
								/>
							)
						})}
					</div>
				)}
			</UserVisitorsHoc>
			<UserVisitorsHoc title='Profile Information'>
				<div className={style.visitors_information}>
					<h5>Gender</h5>
					<h6>Male</h6>
				</div>
			</UserVisitorsHoc>
			<UserVisitorsHoc title='Recent Profile Visitors'>
				<p className={style.visitors_visitor_count}>
					{lastViewers.length} profile views
				</p>
				{lastViewers.length <= 0 ? null : (
					<div className={style.visitors_visitor_info_container}>
						{lastViewers.map(data => {
							return (
								<Fragment>
									<img src={data.avatar} alt='User icon' />
									<div>
										<p>{data.name}</p>
										<p className={style.visitors_visit_date}>
											Sunday at 09:41 PM
										</p>
									</div>
								</Fragment>
							)
						})}
					</div>
				)}
			</UserVisitorsHoc>
		</section>
	)
}

export default UserVisitors
