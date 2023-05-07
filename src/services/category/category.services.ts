//Node_modules imports
import useSWR from 'swr'
import axios from 'axios'

//Interfaces imports
import { ICategory } from './interfaces/category.interfaces'

const BASE_URL = (import.meta.env.MODE == 'development')
? import.meta.env.VITE_DEV_SERVER_URL
: import.meta.env.VITE_PROD_SERVER_URL

const Category = {
	getAllCategorie() {
		const fetcher = async () => {
			const { data } = await axios.get<ICategory[]>(
				`${BASE_URL}`
			)
			return data
		}

		const { data, error, isLoading } = useSWR('fetch/topic', fetcher)

		return { data, error, isLoading }
	},
}

export default Category
