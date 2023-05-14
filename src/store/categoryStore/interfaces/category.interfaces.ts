export interface ICategoryState {
  categories: ICategory[] | []
  isLoading: boolean,
  error: unknown
}

export interface ICategory {
	_id: string
	title: string
	description: string
	last_comment: {
		title: string
		author: string
		author_id: string
		author_icon: string
		public_data: string
		theme_id: string
	}
}
