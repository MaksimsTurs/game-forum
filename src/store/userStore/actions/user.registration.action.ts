//Node_modules imports
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//Interfaces imports
import { IRegistrationForm } from '@/pages/ui/LoginForm/interfaces/form.interfaces'

const userRegistration = createAsyncThunk<
	{ _id: string; role: string; token: string },
	IRegistrationForm
>('user/registration', async (userData, thunkApi) => {
	try {
		const { data } = await axios.post('https://game-forum-server.vercel.app/registration', {
			userData,
		})
		return data
	} catch (error) {
		return thunkApi.rejectWithValue('Cann not find User')
	}
})

export default userRegistration
