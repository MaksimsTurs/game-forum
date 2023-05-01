//SCSS Module imports
import style from '../scss/ThemeCommentForm.module.scss'

//React imports
import { useState } from 'react'

//Interfaces imports
import { FC } from 'react'

const ThemeCommentForm: FC = () => {
	const [isActive, setActiv] = useState<boolean>(false)

  const showeditor = () => {
    setActiv(true)
  }

	return (
		<form className={style.comment_form_container}>
			<div
      onClick={showeditor}
				className={
					isActive ? `${style.comment_input_active}` : `${style.comment_input}`
				}
			>
				<section
					className={
						isActive
							? style.comment_editor_container
							: `${style.comment_editor_container} ${style.hidden}`
					}
				>
					<button className={style.comment_editor_option}>
						<b>B</b>
					</button>
					<button className={style.comment_editor_option}>
						<em>B</em>
					</button>
					<button className={style.comment_editor_option}>
						<u>B</u>
					</button>
					<button className={style.comment_editor_option}>
						<s>B</s>
					</button>
				</section>
				<p contentEditable={true} data-placeholder='Type some one'></p>
			</div>
			<div className={isActive ? style.comment_footer : style.hidden}>
				<button className={style.comment_submit_button}>Submit</button>
			</div>
		</form>
	)
}

export default ThemeCommentForm
