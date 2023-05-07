//Node_modules imports
import useSWR from 'swr'
import axios from 'axios'

//Interfaces imports
import { IComment } from './interfaces/comment.interfaces'

const Comment = {
	getAllComments(id: string) {
		const fetcher = async (url: string) => {
			const { data } = await axios.get<IComment[]>(`https://game-forum-server.vercel.app/${url}/${id}`)
			return data
		}

		const { data, error } = useSWR('comment', fetcher, { refreshInterval: 1 })
		return { data, error }
	},

	async createComment(token: string, data: any) {
		await axios.post<IComment>(`https://game-forum-server.vercel.app/comment/${token}`, { data })
	},

	async deleteComment(body: any) {
		const { data } = await axios.post(`https://game-forum-server.vercel.app/comment/action/delete`, {
			body,
		})
		return data
	},
}

export default Comment
