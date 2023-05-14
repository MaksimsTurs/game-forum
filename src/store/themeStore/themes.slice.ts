//Node_modules imports
import { createSlice } from '@reduxjs/toolkit'

//Interfaces imports
import { IThemesState } from './interfaces/themes.interfaces'

//Actions imports
import getAllThemes from './actions/themes.getall.action'
import getSingleTheme from './actions/themes.getsingletheme.actions'

const initialState: IThemesState = {
	themedata: [],
	categorydata: undefined,
	isLoading: true,
	error: '',
}

const themeSlice = createSlice({
	name: 'themes',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getAllThemes.pending, state => {
				state.isLoading = true
			})
			.addCase(getAllThemes.rejected, (state, action) => {
				state.isLoading = false
				state.error = 'Error'
			})
			.addCase(getAllThemes.fulfilled, (state, action) => {
				//@ts-ignore
				state.categorydata = action.payload['categoryData']
				//@ts-ignore
				state.themedata = action.payload['themeData']

				state.isLoading = false
			})
			//Get Single Theme
			.addCase(getSingleTheme.pending, state => {
				state.isLoading = true
			}).addCase(getSingleTheme.rejected, (state, action) => {
				state.isLoading = false
			}).addCase(getSingleTheme.fulfilled, (state, action) => {
				state.themedata = action.payload
				state.isLoading = false
			})
	},
})

export default themeSlice.reducer
