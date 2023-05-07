//Node_modules imports
import { createSlice } from '@reduxjs/toolkit'

//Interfaces imports
import { IUserRegistration } from './interfaces/user.interfaces'

//Actions imports
import { userLogin, userRegistration } from './user.actions'

const initialState: IUserRegistration = {
	role: localStorage.getItem('role') || 'guest',
	token: localStorage.getItem('token') || '',
	isLoading: false,
	error: '',
}

export const userAuthSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state, _) => {
			//Log out from account
			state.role = 'guest'
			state.token = ''

			localStorage.setItem('role', 'guest')
			localStorage.setItem('token', '')
		},
	},
	extraReducers(builder) {
		builder
			//Authentication
			.addCase(userRegistration.pending, state => {
				state.isLoading = true
			})
			.addCase(userRegistration.rejected, (state, action) => {
				state.error = action.error
			})
			.addCase(userRegistration.fulfilled, (state, { payload }) => {
				state.role = payload.role
				state.token = payload.token

				localStorage.setItem('token', payload.token)
				localStorage.setItem('role', payload.role)

				state.isLoading = false
			})
			//Login
			.addCase(userLogin.pending, state => {
				state.isLoading = true
			})
			.addCase(userLogin.rejected, (state, action) => {
				state.error = action.error
			})
			.addCase(userLogin.fulfilled, (state, { payload }) => {
				state.role = payload.role
				state.token = payload.token

				localStorage.setItem('token', payload.token)
				localStorage.setItem('role', payload.role)

				state.isLoading = false
			})
	},
})

export const { logout } = userAuthSlice.actions
export default userAuthSlice.reducer
