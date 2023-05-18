//Interfaces imports
import { ICreateNewTheme } from '@/pages/fragments/CreateThemeContainer/interfaces/createThemeForm.interfaces'
import { IThemeData } from '../interfaces/themes.interfaces'

//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const createNewThem = createAsyncThunk<IThemeData, ICreateNewTheme>(
	'createnewtheme',
	async (themedata, thunkApi) => {
		try {
			const { data } = await axios.post('https://game-forum-server.vercel.app/create/theme', {
				themedata
			})
			return data
		} catch (error) {
			return thunkApi.fulfillWithValue(error)
		}
	}
)

export default createNewThem
