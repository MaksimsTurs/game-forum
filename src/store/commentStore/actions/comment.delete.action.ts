//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Interfaces imports
import { ICommentDeleted, IDeleComment } from '../interfaces/comment.interfaces';

const deleteComment = createAsyncThunk<ICommentDeleted, IDeleComment>(
  'delete/comment',
  async (body, thunkApi) => {
    try {
      const { data } = await axios.post('https://game-forum-server.vercel.app/comment/action/delete', { body })
      return data
    } catch(error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export default deleteComment