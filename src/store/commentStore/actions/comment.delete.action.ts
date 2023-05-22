//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Interfaces imports
import { IDeleComment } from '../interfaces/comment.interfaces';

const deleteComment = createAsyncThunk<string, IDeleComment>(
  'delete/comment',
  async (body, thunkApi) => {
    try {
      const { data } = await axios.delete('https://game-forum-server.vercel.app/comment/delete', { data : body })
      return data
    } catch(error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export default deleteComment