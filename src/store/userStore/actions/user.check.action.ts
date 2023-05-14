//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//Interfaces imports
import { IUserData } from '../interfaces/user.interfaces'

//Data fetching for user detail page
const userCheck = createAsyncThunk<IUserData, string>(
	'auth/check',
	async (id, thunkApi) => {
		try {
			const { data } = await axios.post(`https://game-forum-two.vercel.app/user/${id}`)
			return data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export default userCheck