//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//Interface imports
import { ILoginForm } from '@/pages/ui/LoginForm/interfaces/form.interfaces'

const userLogin = createAsyncThunk<
	{ _id: string; role: string; token: string },
	ILoginForm
>('user/login', async (userData, thunkApi) => {
	try {
		const { data } = await axios.post('https://game-forum-server.vercel.app/login', {
			userData,
		})
		return data
	} catch (error) {
		return thunkApi.rejectWithValue('Cann not find User')
	}
})

export default userLogin
