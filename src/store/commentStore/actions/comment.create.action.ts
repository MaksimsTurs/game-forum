//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios'

//Interfaces imports
import { IComment, ICreateComment } from '../interfaces/comment.interfaces'

const createNewComment = createAsyncThunk<IComment, ICreateComment>(
  'fetch/createcomment',
  async ({ token, commentdata }, thunkApi) => {
    try {
      const { data } = await axios.post(`http://localhost:4500/comment/${token}`, { commentdata })
      return data
    } catch(error) {
      return thunkApi.rejectWithValue((error as AxiosError).response?.status)
    }
  }
)

export default createNewComment