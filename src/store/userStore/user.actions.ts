import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//Interfaces imports 
import { IUserAuth, IUserId, IUserInfo, IUserLog, IUserReg } from './interfaces/user.interfaces'

export const userAuth = createAsyncThunk<IUserAuth, IUserReg>(
	'auth/reg',
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

export const userLogin = createAsyncThunk<IUserAuth, IUserLog>(
  'auth/log',
  async (userData, thunkApi) => {
		try {
			const { data } = await axios.post(`https://game-forum-server.vercel.app/login`, {
				userData,
			})
			return data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const userCheck = createAsyncThunk<IUserInfo, IUserId>(
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