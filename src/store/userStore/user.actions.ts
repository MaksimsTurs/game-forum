import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//Interfaces imports 
import { IUserAuth, IUserLog, IUserReg } from './userauth.interface'

export const userAuth = createAsyncThunk<IUserAuth, IUserReg>(
	'auth/reg',
	async (userData, thunkApi) => {
		try {
			const { data } = await axios.post(`http://localhost:4500/registration`, {
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
			const { data } = await axios.post(`http://localhost:4500/login`, {
				userData,
			})
			return data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)