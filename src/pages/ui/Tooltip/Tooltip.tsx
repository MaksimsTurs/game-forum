//SCSS Modules 
import style from './Tooltip.module.scss'

//Interfaces import
import { FC } from 'react'

interface IComponentProps {
  text: string
  state: boolean
}

const Tooltip: FC<IComponentProps> = ({ state, text }) => {
  return (
    <div className={state ? style.tooltip_container : style.tooltip_hidden}>
      {text}
    </div>
  )
}

export default Tooltip