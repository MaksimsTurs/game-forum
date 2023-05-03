//Node_modules imports
import { createSlice } from '@reduxjs/toolkit'

//Actions imports
import { userCheck } from './user.actions'

//Interfaces imports
import { IUserInfo } from './interfaces/user.interfaces'

const initialState: IUserInfo = {
	name: '',
	role: '',
	status: 'loading',
	error: '',
}

const userCheckSlice = createSlice({
	name: 'user/check',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(userCheck.pending, state => {
				state.status = 'loading'
			})
			.addCase(userCheck.rejected, state => {
				state.error = 'Problem by data fetchig'
			})
			.addCase(userCheck.fulfilled, (state, { payload }) => {
				state.status = 'succes'
				state.name = payload.name
				state.role = payload.role
			})
	},
})

export default userCheckSlice.reducer
