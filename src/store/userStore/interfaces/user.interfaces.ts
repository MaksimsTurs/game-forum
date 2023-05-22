import { IComment } from '@/store/commentStore/interfaces/comment.interfaces'

export interface IUserState {
	id: string
	role: string
	token: string
	isLoading: boolean
	error: string
	user: IUserData
}

export interface IUserData {
	name: string
	role: string
	avatar: string
	accountCreateDate: string
	followers: IUserData[]
	lastComments: IComment[]
	lastViewers: IUserData[]
}