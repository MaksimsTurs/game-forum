//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

//Interfaces imports
import { IComment } from '../interfaces/comment.interfaces'

const createNewComment = createAsyncThunk<IComment, any>(
  'fetch/createcomment',
  async ({ commentdata }, thunkApi) => {
    try {
      const { data } = await axios.post(`https://game-forum-server.vercel.app/comment/add`, { commentdata })
      return data
    } catch(error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export default createNewComment