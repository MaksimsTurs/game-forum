//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//Interfaces imports
import { IThemeReturnData } from '../interfaces/themes.interfaces'

const getAllThemes = createAsyncThunk<IThemeReturnData, { id: string }>(
	'theme/fetch',
	async ({ id }, thunkApi) => {
		try {
			const { data } = await axios.get(`https://game-forum-server.vercel.app/category/getall/${id}?page=1`)

			return data
		} catch (error) {
			return thunkApi.rejectWithValue('Cann not get Themes in this Category')
		}
	}
)

export default getAllThemes
