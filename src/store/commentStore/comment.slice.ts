//Interfaces imports
import { ICommentState } from './interfaces/comment.interfaces'

//Node_modules imports
import { createSlice, current } from '@reduxjs/toolkit'

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
			.addCase(getAllComments.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.error
			})
			.addCase(getAllComments.fulfilled, (state, { payload }) => {
				state.comments = payload
				state.isLoading = false
			})
			//Create new comment
			.addCase(createNewComment.pending, state => {
				state.isLoading = true
			})
			.addCase(createNewComment.rejected, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			})
			.addCase(createNewComment.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.comments = [...state.comments, payload]
			})
			//Delete comment
			.addCase(deleteComment.pending, state => {
				state.isLoading = true
			})
			.addCase(deleteComment.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.error
			})
			.addCase(deleteComment.fulfilled, (state, { payload }) => {
				state.isLoading = false
				
				if (payload.deleted) {
					const newArrayOfComments = current(state.comments).filter(
						el => el._id !== payload._id
					)
					state.comments = newArrayOfComments
				}
			})
	},
})

export default commentSlice.reducer
