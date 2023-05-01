export interface IResponse {
  data: any | undefined
  error: string | undefined,

}

export interface ICategory {
  _id: string,
  title: string,
  description: string
}