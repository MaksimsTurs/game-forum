//Interfaces imports
import { FC } from 'react'

//SCSS Module imports
import style from '../scss/userVisitors.module.scss'

//Components imports
import UserVisitorsHoc from './userVisitors.hoc'

//Image imports
import usericon from '../img/user_icon.png?format=webp&preset=thumbnail'

const UserVisitors: FC = () => {
	return (
		<section className={style.visitors_container}>
			<div className={style.visitors_gold_container}>
				<h5>Ehren last won the day on April 23</h5>
				<h6>Ehren had the most liked content!</h6>
			</div>
			<UserVisitorsHoc title='19 Followers'>
				<div className={style.visitors_followers_container}>
					<img
						className={style.visitors_followers_icon}
						src={usericon}
						alt='User icon'
						loading='lazy'
					/>
					<img
						className={style.visitors_followers_icon}
						src={usericon}
						alt='User icon'
					/>
					<img
						className={style.visitors_followers_icon}
						src={usericon}
						alt='User icon'
					/>
					<img
						className={style.visitors_followers_icon}
						src={usericon}
						alt='User icon'
					/>
					<img
						className={style.visitors_followers_icon}
						src={usericon}
						alt='User icon'
					/>
					<img
						className={style.visitors_followers_icon}
						src={usericon}
						alt='User icon'
					/>
				</div>
			</UserVisitorsHoc>
			<UserVisitorsHoc title='Profile Information'>
				<div className={style.visitors_information}>
					<h5>Gender</h5>
					<h6>Male</h6>
				</div>
			</UserVisitorsHoc>
			<UserVisitorsHoc title='Recent Profile Visitors'>
				<p className={style.visitors_visitor_count}>358,953 profile views</p>
        <div className={style.visitors_visitor_info_container}>
          <img src={usericon} alt="User icon" />
          <div>
            <p>Seuong_csbd</p>
            <p className={style.visitors_visit_date}>Sunday at 09:41 PM</p>
          </div>
        </div>
			</UserVisitorsHoc>
		</section>
	)
}

export default UserVisitors
