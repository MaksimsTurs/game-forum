//Node_modules imports
import useSWR from 'swr'
import axios from 'axios'

//Interfaces imports
import { ICategory, IResponse } from './interfaces/category.interfaces'

const Category = {
	
	getAllCategorie(): IResponse {

		const fetcher = async () => {
			const { data } = await axios.get<ICategory>('https://game-forum-server.vercel.app/')
			return data
		}
	
		const { data, error } = useSWR('fetch/topic', fetcher)	

		return { data, error }
	}
}

export default Category