//Interfaces imports
import { IRegistrationForm } from '@/pages/ui/LoginForm/interfaces/form.interfaces'
import { IUserRegistration } from '../interfaces/user.interfaces'

//Node_modules imports
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

//Registraiton action
const userRegistration = createAsyncThunk<IUserRegistration, IRegistrationForm>(
	'auth/registration',
	async (userData, thunkApi) => {
		try {
			const { data } = await axios.post(`https://game-forum-two.vercel.app/registration`, {
				userData,
			})
			return data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export default userRegistration