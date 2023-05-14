//SCSS Module imports
import style from '../scss/userAchivments.module.scss'

//Interfaces imports
import { FC } from 'react'

const UserAchivments: FC = () => {
  return(
    <section className={style.user_achive_container}>
      <div className={style.user_achive_header}>Ehren's Achievements</div>
      <div className={style.user_achive_body}>
        <div className={style.user_achive_content}>
          <h5>6.5K</h5>
          <h6>Reputation</h6>
        </div>
        <div className={style.user_achive_content}>
          <h5 className={style.blue}>4.3K</h5>
          <h6>Comunity Answers</h6>
        </div>
      </div>
    </section>
  )
}

export default UserAchivments