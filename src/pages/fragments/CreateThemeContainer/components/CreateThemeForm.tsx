//SCSS Modules imports
import style from '../scss/CreateThemeForm.module.scss'

//Components imports
import Loader from '@/pages/ui/Loader/Loader'

//Interfaces imports=
import {
	ChangeEvent,
	FC,
	Fragment,
	useCallback,
	useMemo,
	useState,
} from 'react'
import { RootState, AppDispatch } from '@/store/store'
import { IUserState } from '@/store/userStore/interfaces/user.interfaces'
import { IThemesState } from '@/store/themeStore/interfaces/themes.interfaces'

//Node_modules
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'

//Actions imports
import createNewThem from '@/store/themeStore/actions/theme.createnew.action'

const CreateThemeForm: FC = () => {
	const [title, setTitle] = useState<string>('')
	const [text, setText] = useState('')

	const { pathname } = useLocation()
	const dispatch = useDispatch<AppDispatch>()

	const themeId = pathname.replace('/create-theme', '').replace('/', '')

	const { token } = useSelector<RootState, IUserState>(
		state => state.userSlice
	)

	const { error, isLoading } = useSelector<RootState, IThemesState>(
		state => state.themesSlice
	)

	const createNewTheme = () => {
		dispatch(createNewThem({ token, text, title, themeId }))
	}

	const writeLine = useCallback((value: string) => {
		setText(value)
	}, [])

	const editTitle = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value)
	}

	const options = useMemo(
		() => ({
			spellChecker: false,
			maxHeight: '14rem',
			autofocus: true,
			placeholder: 'Write your text her...',
			status: false,
			autosave: {
				uniqueId: Math.floor((Math.random() * 30000) / 5000).toString(),
				enabled: true,
				delay: 1000,
			},
		}),
		[]
	)

	return (
		<Fragment>
			<p className={style.create_title}>
				{title.trim().length === 0 ? 'Create new Theme' : title}
			</p>
			{isLoading ? (
				<Loader />
			) : (
				<form
					onSubmit={createNewTheme}
					className={`${style.create_form_container}`}
				>
					<label>
						<p className={style.create_theme_name}>Theme Title</p>
						<input
							placeholder='Title'
							className={style.create_theme_input}
							type='text'
							onChange={editTitle}
						/>
					</label>
					<SimpleMDE value={text} onChange={writeLine} options={options} />
					{error ? (
						<div>{error}</div>
					) : (
						<button className={style.create_button_submit}>Create</button>
					)}
				</form>
			)}
		</Fragment>
	)
}

export default CreateThemeForm
