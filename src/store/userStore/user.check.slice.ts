//Node_modules imports
import { createSlice } from '@reduxjs/toolkit'

//Actions imports
import { userCheck } from './user.actions'

//Interfaces imports
import { IUserData } from './interfaces/user.interfaces'

const initialState: IUserData = {
	role: 'guest',
	name: '',
	isLoading: false,
	error: null,
}

const userCheckSlice = createSlice({
	name: 'user/check',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(userCheck.pending, state => {
				state.isLoading = true
			})
			.addCase(userCheck.rejected, (state, { payload }) => {
				state.error = payload
			})
			.addCase(userCheck.fulfilled, (state, { payload }) => {
				state.isLoading= false
				state.name = payload.name
				state.role = payload.role
			})
	},
})

export default userCheckSlice.reducer
