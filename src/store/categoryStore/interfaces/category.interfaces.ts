export interface ICategory {
  _id: string
  title: string
  description: string
  icon: string
  last_comment: {
    title: string
    theme_id: string
    author: string
    author_id: string
    author_icon: string
    public_data: Date
  }
}

export interface ICategoryState {
  categories: ICategory[]
  isLoading: boolean
  error: string
}