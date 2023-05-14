export interface ICategoryData {
	_id: string
	title: string
	description: string
}

export interface IThemeData {
	_id: string
	topics_id: string
	title: string
	author: string
	text: string
	views: number
	reply: number
}

export interface IThemesState {
  themedata: IThemeData[] | [] 
  categorydata: ICategoryData | undefined
  isLoading: boolean
  error: unknown
}