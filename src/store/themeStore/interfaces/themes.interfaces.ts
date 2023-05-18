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
	text?: string | undefined
	views?: number | undefined
	reply?: number | undefined
	locked?: boolean | undefined
}

export interface IThemesState {
  themedata: IThemeData[] | [] 
  categorydata: ICategoryData | undefined
  isLoading: boolean
  error: unknown
}

export interface ICloseThemeAction {
	token: string
	theme_id: string | undefined
}