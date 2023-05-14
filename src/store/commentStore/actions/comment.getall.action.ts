//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

//Interfaces imports
import { IComment } from '../interfaces/comment.interfaces'

const getAllComments = createAsyncThunk<IComment[], string>(
  'fetch/comments',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.get<IComment[]>(`https://game-forum-two.vercel.app/comment/${id}`)

      return data
    } catch(error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export default getAllComments