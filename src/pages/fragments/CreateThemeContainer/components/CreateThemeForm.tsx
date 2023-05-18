//SCSS Modules imports
import style from '../scss/CreateThemeForm.module.scss'

//Components imports
import Loader from '@/pages/ui/Loader/Loader'

//Interfaces imports
import { FC, Fragment } from 'react'
import { ICreateNewTheme } from '../interfaces/createThemeForm.interfaces'
import { RootState, AppDispatch } from '@/store/store'
import { IUserState } from '@/store/userStore/interfaces/user.interfaces'
import { IThemesState } from '@/store/themeStore/interfaces/themes.interfaces'

//Node_modules
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

//Actions imports
import createNewThem from '@/store/themeStore/actions/create.newtheme.action'

const CreateThemeForm: FC = () => {
	const { pathname } = useLocation()
	const dispatch = useDispatch<AppDispatch>()

	const {
		register,
		reset,
		formState: { errors },
		handleSubmit,
	} = useForm<ICreateNewTheme>()

	const { token } = useSelector<RootState, IUserState>(
		state => state.userAuthSlice
	)

	const { isLoading } = useSelector<RootState, IThemesState>(state => state.themesSlice)

	const id = pathname.replace('/create-theme', '').replace('/', '')

	const createNewTheme: SubmitHandler<ICreateNewTheme> = ({ text, title }) => {
		dispatch(createNewThem({ token, text, title, id }))
    reset()
	}

	return (
		<Fragment>
			{isLoading ? (
				<Loader />
			) : (
				<form
					onSubmit={handleSubmit(createNewTheme)}
					className={`${style.create_form_container}`}
				>
					<label>
						<p className={style.create_theme_name}>Theme Title</p>
						<input
							placeholder='Title'
							className={`${style.create_theme_input} ${style.create_border}`}
							type='text'
							{...register('title', {
								required: 'Title is a required field',
							})}
						/>
						{errors && <div>{errors.title?.message}</div>}
					</label>
					<section
						className={`${style.create_editor_container} ${style.create_border}`}
					>
						<button className={style.create_editor_button}>
							<b>B</b>
						</button>
						<button className={style.create_editor_button}>
							<em>B</em>
						</button>
						<button className={style.create_editor_button}>
							<u>B</u>
						</button>
						<button className={style.create_editor_button}>
							<s>B</s>
						</button>
					</section>
					<label>
						<textarea
							placeholder='Yourt text her...'
							className={`${style.create_theme_input} ${style.create_theme_textarea} ${style.create_border}`}
							{...register('text')}
						/>
					</label>
					<button className={style.create_button_submit}>Create!</button>
				</form>
			)}
		</Fragment>
	)
}

export default CreateThemeForm
