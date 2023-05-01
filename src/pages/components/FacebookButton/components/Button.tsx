//SCSS Module imports
import style from '../scss/Button.module.scss'

//Node_modules imports
import { Link } from 'react-router-dom'

//Interfaces imports
import { FC } from 'react'

//Image imports
//@ts-ignore
import facebookicon from '../img/facebook-app-symbol.png?format=webp&preset=thumbnail'

const Button: FC = () => {
  return(
    <Link className={style.facebok_button_content} to='/'>
    <img
      className={style.facebok_image_container}
      src={facebookicon}
      alt='Facebook icon'
    />
    <div className={style.facebok_text_container}>
      <p>Sign in with Facebook</p>
    </div>
  </Link>
  )
}

export default Button