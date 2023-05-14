//Node_modules imports
import { createSlice } from '@reduxjs/toolkit'

//Interfaces imports
import { IUserState } from './interfaces/user.interfaces'

//Actions imports
import userRegistration from './actions/user.registration.action'
import userLogin from './actions/user.login.action'

const initialState: IUserState = {
	role: localStorage.getItem('role') || 'guest',
	token: localStorage.getItem('token') || '',
	isLoading: false,
	error: '',
}

const userAuthSlice = createSlice({
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
			.addCase(userRegistration.rejected, (state, { payload }) => {
				state.error = String(payload)
			})
			.addCase(userRegistration.fulfilled, (state, { payload }) => {
				state.role = payload.role
				state.token = payload.token
				state.error = ''

				localStorage.setItem('token', payload.token)
				localStorage.setItem('role', payload.role)

				state.isLoading = false
			})
			//Login
			.addCase(userLogin.pending, state => {
				state.isLoading = true
			})
			.addCase(userLogin.rejected, (state, { payload }) => {
				state.error = String(payload)
			})
			.addCase(userLogin.fulfilled, (state, { payload }) => {
				state.role = payload.role
				state.token = payload.token
				state.error = ''

				localStorage.setItem('token', payload.token)
				localStorage.setItem('role', payload.role)

				state.isLoading = false
			})
	},
})

export const { logout } = userAuthSlice.actions
export default userAuthSlice.reducer
