//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const getAllThemes = createAsyncThunk<unknown, string>(
	'fetch/themes',
  //@ts-ignore
	async (id, thunkApi) => {
		try {
			const { data } = await axios.get(`https://game-forum-server.vercel.app/topic/${id}`)

			return data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export default getAllThemes
