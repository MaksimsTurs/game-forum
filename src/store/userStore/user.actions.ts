import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

//Interfaces imports
import {
	IUserRegistration,
	IUserId,
	IUserData,
	IUserLogin,
} from './interfaces/user.interfaces'

import { IRegistrationForm } from '@/pages/components/LoginForm/interfaces/form.interfaces'

//Authentification action
export const userRegistration = createAsyncThunk<IUserRegistration, IRegistrationForm>(
	'auth/registration',
	async (userData, thunkApi) => {
		try {
			const { data } = await axios.post(`https://game-forum-server.vercel.app/registration`, {
				userData,
			})
			return data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

//Login into account action
export const userLogin = createAsyncThunk<IUserRegistration, IUserLogin>(
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

//Data fetching for user detail page
export const userCheck = createAsyncThunk<IUserData, IUserId>(
	'auth/check',
	async (id, thunkApi) => {
		try {
			const { data } = await axios.post(`https://game-forum-server.vercel.app/user/${id}`)
			return data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)
