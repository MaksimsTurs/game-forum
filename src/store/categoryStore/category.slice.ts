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
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getAllCategorie.pending, state => {
				state.isLoading = true
			})
			//TODO: Add error
			.addCase(getAllCategorie.rejected, (state, _) => {
				state.isLoading = false
			})
			.addCase(getAllCategorie.fulfilled, (state, action) => {
        state.isLoading = false
				state.categories = action.payload
			})
	},
})

export default categoriesSlice.reducer
