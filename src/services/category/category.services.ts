//Node_modules imports
import useSWR from 'swr'
import axios from 'axios'

//Interfaces imports
import { ICategory } from './interfaces/category.interfaces'

const Category = {
	getAllCategorie() {
		const fetcher = async () => {
			const { data } = await axios.get<ICategory[]>(
				'https://game-forum-server.vercel.app/'
			)
			return data
		}

		const { data, error, isLoading } = useSWR('fetch/topic', fetcher)

		return { data, error, isLoading }
	},
}

export default Category
