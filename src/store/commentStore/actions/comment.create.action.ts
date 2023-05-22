//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

//Interfaces imports
import { IComment, ICreateNewComment } from '../interfaces/comment.interfaces'

const createNewComment = createAsyncThunk<IComment, ICreateNewComment>(
  'create-comment',
  async (commentData, thunkApi) => {
    try {
      const { data } = await axios.post(`https://game-forum-server.vercel.app/comment/add`, { commentData })
      return data
    } catch(error) {
      return thunkApi.rejectWithValue('You have no permission to create new Comment!')
    }
  }
)

export default createNewComment