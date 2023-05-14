//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const getAllThemes = createAsyncThunk<unknown, string>(
	'fetch/themes',
  //@ts-ignore
	async (id, thunkApi) => {
		try {
			const { data } = await axios.get(`http://localhost:4500/topic/${id}`)

			return data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export default getAllThemes
