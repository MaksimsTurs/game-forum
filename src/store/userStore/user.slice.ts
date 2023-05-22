//Node_modules imports
import { createSlice } from '@reduxjs/toolkit'

//Interfaces imports
import { IUserState } from './interfaces/user.interfaces'
import userLogin from './actions/user.login.action'
import userRegistration from './actions/user.registration.action'
import checkUser from './actions/user.checkdata.action'

//Actions imports

const initialState: IUserState = {
	user: {
		name: '',
		avatar: '',
		role: '',
		accountCreateDate: '',
		followers: [],
		lastComments: [],
		lastViewers: []
	},
	token: localStorage.getItem('token') || '',
	role: localStorage.getItem('role') || 'guest',
	id: localStorage.getItem('id') || '',
	isLoading: false,
	error: '',
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: state => {
			//Log out from account
			state.token = ''
			state.role = 'guest'

			localStorage.setItem('role', 'guest')
			localStorage.setItem('token', '')
			localStorage.setItem('id', '')
		},
	},
	extraReducers(builder) {
		builder
			.addCase(userLogin.pending, state => {
				state.isLoading = true
			})
			.addCase(userLogin.rejected, (state, { payload }) => {
				//@ts-ignore
				state.error = payload
				state.isLoading = false
			})
			.addCase(userLogin.fulfilled, (state, { payload }) => {
				state.role = payload.role
				state.id = payload._id
				state.token = payload.token

				localStorage.setItem('role', payload.role)
				localStorage.setItem('token', payload.token)
				localStorage.setItem('id', payload._id)

				state.isLoading = false
			})
			//Registration
			.addCase(userRegistration.pending, state => {
				state.isLoading = true
			})
			.addCase(userRegistration.rejected, (state, { payload }) => {
				//@ts-ignore
				state.error = payload
				state.isLoading = false
			})
			.addCase(userRegistration.fulfilled, (state, { payload }) => {
				state.role = payload.role
				state.id = payload._id
				state.token = payload.token

				localStorage.setItem('role', payload.role)
				localStorage.setItem('token', payload.token)
				localStorage.setItem('id', payload._id)

				state.isLoading = false
			})
			//Check user
			.addCase(checkUser.pending, state => {
				state.isLoading = true
			})
			.addCase(checkUser.rejected, (state, { payload }) => {
				//@ts-ignore
				state.error = payload
				state.isLoading = false
			})
			.addCase(checkUser.fulfilled, (state, { payload }) => {
				state.user = payload
				state.isLoading = false
			})
	},
})

export const { logout } = userSlice.actions
export default userSlice.reducer
