export interface IRegistrationForm {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  updateNotification: boolean,
  terms: boolean
}

export interface ILoginForm {
  name: string,
  password: string
}