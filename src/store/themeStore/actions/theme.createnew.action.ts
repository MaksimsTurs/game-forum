//Interfaces imports
import { ICreateNewTheme } from '@/pages/fragments/CreateThemeContainer/interfaces/createThemeForm.interfaces'
import { IThemeData } from '../interfaces/themes.interfaces'

//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const createNewThem = createAsyncThunk<IThemeData, ICreateNewTheme>(
	'theme/createNew',
	async (themedata, thunkApi) => {
		try {
			const { data } = await axios.post('https://game-forum-server.vercel.app/theme/create', {
				themedata
			})
			return data
		} catch (error) {
			return thunkApi.fulfillWithValue('You have no permission to create new Theme!')
		}
	}
)

export default createNewThem
