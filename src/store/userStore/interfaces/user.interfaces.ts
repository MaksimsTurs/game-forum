export interface IUserRegistration {
	role: string
	token: string
	isLoading: boolean
	error: unknown
}

export interface IUserLogin {
	userData: {
		name: string,
		password: string
	}
}

export interface IUserData {
	role: string
	name: string
	isLoading: boolean
	error: unknown
}
