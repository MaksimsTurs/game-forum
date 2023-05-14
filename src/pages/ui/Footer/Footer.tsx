//SCSS Module imports
import style from './Footer.module.scss'

//Node_modules imports
import { Link } from 'react-router-dom'

//Interfaces imports
import { FC } from 'react'

const Footer: FC = () => {
  return(
    <footer>
      <p>© 2006 - 2023</p>
      <ul className={style.footer_social_items}>
        <li><Link className={style.footer_social_link} to={'/'}>VKontakte</Link></li>
        <li><Link className={style.footer_social_link} to={'/'}>Youtube</Link></li>
        <li><Link className={style.footer_social_link} to={'/'}>Game Website</Link></li>
        <li><Link className={style.footer_social_link} to={'/'}>Contancts</Link></li>
      </ul>
    </footer>
  )
}

export default Footer