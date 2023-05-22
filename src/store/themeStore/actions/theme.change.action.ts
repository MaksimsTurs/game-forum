//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const changeTheme = createAsyncThunk<
	{ _id: string; text: string },
	{ themeId: string; text: string }
>('change/theme', async (themeData, thunkApi) => {
  try {
    const { data } = await axios.post('https://game-forum-server.vercel.app/theme/change', { themeData })
    return data
  } catch(error) {
    return thunkApi.rejectWithValue('You have no permission to do this!')
  }
})

export default changeTheme