//Node_modules import
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//Interfaces imports
import { ICategory } from '../interfaces/category.interfaces'

const getAllCategorie = createAsyncThunk<ICategory[]>(
	'fetch/category',
	async (_, thunkApi) => {
		try {
			const { data } = await axios.get<ICategory[]>(`http://localhost:4500/`)
			return data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export default getAllCategorie