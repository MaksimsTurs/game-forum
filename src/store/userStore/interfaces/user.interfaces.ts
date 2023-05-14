export interface IUserState {
	role: string
	token: string
	isLoading: boolean
	error: string
}

export interface IUserLogin {
	userData: {
		name: string,
		password: string
	}
}

export interface IUserDataState {
	role: string
	name: string
	isLoading: boolean
	error: string
}
