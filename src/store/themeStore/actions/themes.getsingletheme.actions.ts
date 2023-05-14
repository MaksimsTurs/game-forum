//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//Interfaces imports
import { IThemeData } from '../interfaces/themes.interfaces'

const getSingleTheme = createAsyncThunk<IThemeData[], string>(
	'fetch/single-theme',
	async (id, thunkApi) => {
		try {
			const { data } = await axios.get<IThemeData[]>(
				`https://game-forum-two.vercel.app/theme/${id}`
			)
			return data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export default getSingleTheme