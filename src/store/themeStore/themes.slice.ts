//Node_modules imports
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

//Interfaces imports
import {
	IThemeData,
	IThemeReturnData,
	IThemesState,
} from './interfaces/themes.interfaces'

//Actions imports
import getAllThemes from './actions/theme.getall.action'
import getSingleTheme from './actions/themes.getsingletheme.actions'
import createNewTheme from './actions/theme.createnew.action'
import closeTheme from './actions/theme.close.action'
import changeTheme from './actions/theme.change.action'

const initialState: IThemesState = {
	themeArray: [],
	pagination: [],
	themeSingle: {},
	categoryData: undefined,
	isLoading: false,
	error: '',
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getAllThemes.pending, state => {
				state.isLoading = true
			})
			.addCase(getAllThemes.rejected, (state, { payload }) => {
				//@ts-ignore
				state.error = payload
				state.isLoading = false
			})
			.addCase(
				getAllThemes.fulfilled,
				(state, { payload }: PayloadAction<IThemeReturnData>) => {
					state.categoryData = payload.categoryData
					console.log(payload)
					state.themeArray = payload.themeData
					state.pagination = payload.pagination
					state.isLoading = false
				}
			)
			//Get Single Theme
			.addCase(getSingleTheme.pending, state => {
				state.isLoading = true
			})
			.addCase(getSingleTheme.rejected, (state, { payload }) => {
				//@ts-ignore
				state.error = payload
				state.isLoading = false
			})
			.addCase(
				getSingleTheme.fulfilled,
				(state, { payload }: PayloadAction<IThemeData>) => {
					state.themeSingle = payload
					state.isLoading = false
				}
			)
			//Create new Theme
			.addCase(createNewTheme.pending, state => {
				state.isLoading = true
			})
			.addCase(createNewTheme.rejected, (state, { payload }) => {
				//@ts-ignore
				state.error = payload
				state.isLoading = false
			})
			.addCase(createNewTheme.fulfilled, (state, { payload }) => {
				console.log(payload)
				state.themeArray = [...state.themeArray, payload]		
			
				window.open(`/theme/${payload._id}`, '_self')
				state.isLoading = false
			})
			//Close Theme
			.addCase(closeTheme.fulfilled, (state, { payload }) => {
				state.themeArray.map(el => {
					if (el._id === payload) {
						el.locked = true
						return el
					}
				})
			})
			//Change Theme
			.addCase(changeTheme.pending, state => {
				state.isLoading = true
			})
			.addCase(changeTheme.rejected, (state, { payload }) => {
				//@ts-ignore
				state.error = payload
				state.isLoading = false
			})
			.addCase(changeTheme.fulfilled, (state, { payload }) => {
				state.themeSingle.text = payload.text
				state.isLoading = false
			})
	},
})

export default themeSlice.reducer
