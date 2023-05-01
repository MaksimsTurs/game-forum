//Node_modules imports
import { createSlice } from '@reduxjs/toolkit'

//Interfaces imports
import { IUserAuth } from './userauth.interface'

//Actions imports
import { userAuth, userLogin } from './user.actions'

const initialState: IUserAuth = {
	role: localStorage.getItem('role') || 'guest',
	token: localStorage.getItem('token') || '',
	status: '',
	error: '',
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (_, { payload }) => {
			console.log(payload)
			localStorage.setItem('token', payload)
			localStorage.setItem('role', payload)
		}
	},
	extraReducers(builder) {
		builder
		//Registration
		.addCase(userAuth.pending, state => {
			state.status = 'loading'
		})
		.addCase(userAuth.rejected, state => {
			state.error = 'Problem by reistration'
			state.status = 'error'
		})
		.addCase(userAuth.fulfilled, (state, { payload }) => {
			localStorage.setItem('token', payload.token)
			localStorage.setItem('role', payload.role)

			state.status = 'succes'
			window.open('/', '_self')
		})
		//Login
		.addCase(userLogin.pending, state => {
			state.status = 'loading'
		})
		.addCase(userLogin.rejected, state => {
			state.error = 'Problem by reistration'
			state.status = 'error'
		})
		.addCase(userLogin.fulfilled, (state, { payload }) => {
			localStorage.setItem('token', payload.token)
			localStorage.setItem('role', payload.role)

			state.status = 'succes'
			window.open('/', '_self')
		})
	},
})

export const { logout } = userSlice.actions
export default userSlice.reducer
