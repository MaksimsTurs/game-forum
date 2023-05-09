//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit'

//Interfaces imports
import { IUserRegistration } from '../interfaces/user.interfaces'
import { IUserLogin } from '../interfaces/user.interfaces'
import axios, { AxiosError } from 'axios'

//Login into account action
const userLogin = createAsyncThunk<IUserRegistration, IUserLogin>(
	'auth/login',
	async ({ userData }) => {
		try {
			const { data } = await axios.post(`https://game-forum-server.vercel.app/login`, {
				userData,
			})

			return data
		} catch (error) {
			if ((error as AxiosError).response?.status === 401) {
				//@ts-ignore
				return error.response.data
			}
		}
	}
)

export default userLogin