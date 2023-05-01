//Node_modules imports
import axios from 'axios'
import useSWR from 'swr'

//Interfaces imports
import {
	IThemes,
	ICategoryData,
	IThemeData,
} from './interfaces/themes.interfaces'

const Themes = {
	getAllThemes(id: string) {
		const fetcher = async () => {
			const { data } = await axios.get<IThemes>(
				`http://localhost:4500/topic/${id}`
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
				`http://localhost:4500/theme/${id}`
			)
			return data
		}

		const { data, error, isLoading } = useSWR('fetch/theme', fetcher)

		return { data, error, isLoading }
	}
}

export default Themes
