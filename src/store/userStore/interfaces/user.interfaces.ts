export interface IUserAuth {
	role: string
	token: string
	status?: string
	error?: string
}

export interface IUserReg {
	name: string
	email: string
	password: string
	confirmPassword: string
	updateNotification: boolean
	terms: boolean
}

export interface IUserLog {
	name: string
	password: string
}

export interface IUserInfo {
	role: string
	name: string
	status?: string
	error?: string
}

export interface IUserId {
	id: string
}
