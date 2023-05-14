//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit'

//Interfaces imports
import { IUserState } from '../interfaces/user.interfaces'
import { IUserLogin } from '../interfaces/user.interfaces'
import axios, { AxiosError } from 'axios'

//Login into account action
const userLogin = createAsyncThunk<IUserState, IUserLogin>(
	'auth/login',
	async ({ userData }, thunkApi) => {
		try {
			const { data } = await axios.post(`https://game-forum-server.vercel.app/login`, {
				userData,
			})

			return data
		} catch (error) {
			if ((error as AxiosError).response?.status === 401) {
				const errorMessage = 'Cann not find this name!'
				return thunkApi.rejectWithValue(errorMessage)
			}
		}
	}
)

export default userLogin
