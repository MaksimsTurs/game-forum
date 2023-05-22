//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUserData } from '../interfaces/user.interfaces'

const checkUser = createAsyncThunk<IUserData, { id: string }>(
  'user/check',
  async ({ id }, thunkApi) => {
    try {
			const { data } = await axios.get<IUserData>(`https://game-forum-server.vercel.app/user/${id}`)
      return data
    } catch(error) {
      return thunkApi.rejectWithValue('Cann not find this User!')
    }
  }
)

export default checkUser