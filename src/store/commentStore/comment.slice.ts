//Interfaces imports
import { ICommentState } from './interfaces/comment.interfaces'

//Node_modules imports
import { createSlice } from '@reduxjs/toolkit'

//Actions imports
import getAllComments from './actions/comment.getall.action'
import createNewComment from './actions/comment.create.action'
import deleteComment from './actions/comment.delete.action'

const initialState: ICommentState = {
	comments: [],
	isLoading: true,
	error: '',
}

const commentSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {},
	extraReducers(builder) {
		//Get all comments
		builder
			.addCase(getAllComments.pending, state => {
				state.isLoading = true
			})
			.addCase(getAllComments.rejected, (state, { payload }) => {
				//@ts-ignore
				state.error = payload
				state.isLoading = false
			})
			.addCase(getAllComments.fulfilled, (state, { payload }) => {
				state.comments = payload
				state.isLoading = false
			})
			//Create new comment
			.addCase(createNewComment.pending, state => {
				state.isLoading = true
			})
			.addCase(createNewComment.rejected, (state, { payload }) => {
				//@ts-ignore
				state.error = payload
				state.isLoading = false
			})
			.addCase(createNewComment.fulfilled, (state, { payload }) => {
				state.comments = [...state.comments, payload]
				state.isLoading = false
			})
			//Delete comment
			.addCase(deleteComment.pending, state => {
				state.isLoading = true
			})
			.addCase(deleteComment.rejected, (state, { payload }) => {
				//@ts-ignore
				state.error = payload
				state.isLoading = false
			})
			.addCase(deleteComment.fulfilled, (state, { payload }) => {
				state.comments = state.comments.filter((el) => el._id !== payload)
				state.isLoading = false
			})
	},
})

export default commentSlice.reducer
