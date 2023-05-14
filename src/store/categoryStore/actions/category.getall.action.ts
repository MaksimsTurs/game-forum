//Node_modules import
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//Interfaces imports
import { ICategory } from '../interfaces/category.interfaces'

const getAllCategorie = createAsyncThunk<ICategory[]>(
	'fetch/category',
	async (_, thunkApi) => {
		try {
			const { data } = await axios.get<ICategory[]>(`https://game-forum-two.vercel.app/`)
			return data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export default getAllCategorie
