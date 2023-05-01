export interface ICategoryData {
	_id: string
	title: string
	descrption: string
}

export interface IThemeData {
	_id: string
	topic_id: string
	title: string
	author: string
	text: string
	views: number
	reply: number
}

export interface IThemes {
	categoryData?: ICategoryData
	themeData: IThemeData[]
}