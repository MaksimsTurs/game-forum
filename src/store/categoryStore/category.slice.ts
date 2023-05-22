//Node_modules imports
import { createSlice } from '@reduxjs/toolkit'

//Interfaces imports
import { ICategoryState } from './interfaces/category.interfaces'

//Actions imports
import getAllCategorie from './actions/category.getall.action'

const initialState: ICategoryState = {
	categories: [],
	isLoading: true,
	error: '',
}

const categoriesSlice = createSlice({
	name: 'category',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getAllCategorie.pending, state => {
				state.isLoading = true
			})
			.addCase(getAllCategorie.rejected, (state, { payload }) => {
				//@ts-ignore
				state.error = payload
				state.isLoading = false
			})
			.addCase(getAllCategorie.fulfilled, (state, { payload }) => {
				state.categories = payload
				state.isLoading = false
			})
	},
})

export default categoriesSlice.reducer
