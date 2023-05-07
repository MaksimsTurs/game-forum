//Node_modules imports
import useSWR from 'swr'
import axios from 'axios'

//Interfaces imports
import { IComment } from './interfaces/comment.interfaces'

const BASE_URL =
	import.meta.env.MODE == 'development'
		? import.meta.env.VITE_DEV_SERVER_URL
		: import.meta.env.VITE_PROD_SERVER_URL

const Comment = {
	getAllComments(id: string) {
		const fetcher = async (url: string) => {
			const { data } = await axios.get<IComment[]>(`${BASE_URL}/${url}/${id}`)
			return data
		}

		const { data, error } = useSWR('comment', fetcher, { refreshInterval: 1 })
		return { data, error }
	},

	async createComment(token: string, data: any) {
		await axios.post<IComment>(`${BASE_URL}/comment/${token}`, { data })
	},

	async deleteComment(body: any) {
		const { data } = await axios.post(`${BASE_URL}/comment/action/delete`, {
			body,
		})
		return data
	},
}

export default Comment
