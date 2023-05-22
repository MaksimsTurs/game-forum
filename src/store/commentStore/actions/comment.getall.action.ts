//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

//Interfaces imports
import { IComment } from '../interfaces/comment.interfaces'

const getAllComments = createAsyncThunk<IComment[], string>(
  'fetch/comments',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.get<IComment[]>(`https://game-forum-server.vercel.app/comment/${id}`)

      return data
    } catch(error) {
      return thunkApi.rejectWithValue('Cann not find Comments from this Them!')
    }
  }
)

export default getAllComments