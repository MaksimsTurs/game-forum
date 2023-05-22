export interface IComment {
  _id: string
  theme_id: string
  author: string
  text: string
}

export interface ICommentState {
  comments: IComment[],
  isLoading: boolean
  error: ''
}

export interface ICreateNewComment {
  token: string
  text: string
  theme_id: string
}

export interface IDeleComment {
  _id: string
  role: string,
}