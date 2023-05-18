// SCSS Module imports
import style from './CreateThemeContainer.module.scss'

//Interfaces imports
import { FC } from 'react';

//Components imports
import CreateThemeForm from './components/CreateThemeForm';

const CreateThemeContainer: FC = () => {
  return(
    <div className={style.create_container}>
      <p className={style.create_title}>Create new Theme</p>
      <CreateThemeForm/>
    </div>
  )
}

export default CreateThemeContainer