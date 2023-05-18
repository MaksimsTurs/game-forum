export interface IComment {
  _id: string
  theme_id: string
  author: string
  text: string
}

export interface ICommentState {
  comments: IComment[] | [],
  isLoading: boolean
  error: unknown
}

export interface IDeleComment {
  _id: string
  role: string,
}

export interface ICommentDeleted {
  deleted: boolean,
  _id: string
}