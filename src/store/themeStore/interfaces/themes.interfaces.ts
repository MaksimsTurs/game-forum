export interface ICategoryData {
	_id: string
	title: string
	description: string
}

export interface IThemeData {
	_id?: string | undefined
	topics_id?: string | undefined
	title?: string | undefined
	author?: string | undefined
	author_id?: string | undefined
	text?: string | undefined
	views?: number | undefined
	reply?: number | undefined
	locked?: boolean | undefined
}

export interface IThemesState {
  themeArray: IThemeData[]
	pagination: string[]
	themeSingle: IThemeData
  categoryData: ICategoryData | undefined
  isLoading: boolean
  error: string
}

export interface IThemeReturnData {
	categoryData: ICategoryData
	themeData: IThemeData[]
	pagination: string []
}

export interface ICloseThemeAction {
	token: string
	theme_id: string | undefined
}