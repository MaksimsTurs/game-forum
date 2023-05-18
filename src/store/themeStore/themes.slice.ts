//Node_modules imports
import { createSlice, current } from '@reduxjs/toolkit'

//Interfaces imports
import { IThemesState } from './interfaces/themes.interfaces'

//Actions imports
import getAllThemes from './actions/themes.getall.action'
import getSingleTheme from './actions/themes.getsingletheme.actions'
import createNewTheme from './actions/create.newtheme.action'
import closeTheme from './actions/close.theme.action'

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
			})
			.addCase(getSingleTheme.rejected, (state, action) => {
				state.isLoading = false
			})
			.addCase(getSingleTheme.fulfilled, (state, { payload }) => {
				state.themedata = payload
				state.isLoading = false
			})
			//Create new Theme
			.addCase(createNewTheme.pending, state => {
				state.isLoading = true
			})
			.addCase(createNewTheme.rejected, (state, action) => {
				state.isLoading = false
				state.error = 'Error'
			})
			.addCase(createNewTheme.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.themedata = [...state.themedata, payload]
				window.open(`/theme/${payload._id}`, '_self')
			})
			//Close Theme
			.addCase(closeTheme.fulfilled, (state, { payload }) => {
				state.themedata.map(el => {
					if (el._id === payload) {
						el.locked = true
						return el
					}
				})
			})
	},
})

export default themeSlice.reducer
