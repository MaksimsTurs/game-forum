//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Interfaces import
import { ICloseThemeAction } from '../interfaces/themes.interfaces'

const closeTheme = createAsyncThunk<string, ICloseThemeAction>(
  'close/theme',
  async (closeData, thunkApi) => {
    try {
        const { data } = await axios.post("https://game-forum-server.vercel.app/close/theme", { closeData })
        return data
    } catch(error) {
      return thunkApi.rejectWithValue(error)
    }   
  }
)

export default closeTheme