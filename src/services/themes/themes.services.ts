//Node_modules imports
import axios from 'axios'
import useSWR from 'swr'

//Interfaces imports
import {
	IThemes,
	ICategoryData,
	IThemeData,
} from './interfaces/themes.interfaces'

const BASE_URL = (import.meta.env.MODE == 'development')
? import.meta.env.VITE_DEV_SERVER_URL
: import.meta.env.VITE_PROD_SERVER_URL

const Themes = {
	getAllThemes(id: string) {
		const fetcher = async () => {
			const { data } = await axios.get<IThemes>(
				`${BASE_URL}/topic/${id}`
			)

			const categoryData = data.categoryData
			const themesData = data.themeData

			return {
				categoryData,
				themesData,
			}
		}

		const { data, error, isLoading } = useSWR('fetch/themes', fetcher)

		const categoryData: ICategoryData | undefined = data?.categoryData
		const themeData: IThemeData[] | undefined = data?.themesData

		return { categoryData, themeData, error, isLoading }
	},

	getSingleTheme(id: string) {
		const fetcher = async () => {
			const { data } = await axios.get<IThemeData>(
				`${BASE_URL}/theme/${id}`
			)
			return data
		}

		const { data, error, isLoading } = useSWR('fetch/theme', fetcher, { refreshInterval: 1 })

		return { data, error, isLoading }
	},
}

export default Themes
