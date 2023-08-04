export interface User extends UserCredentials {
  fullname: string,
  email_address: string,
}

export interface UserCredentials {
  username: string,
  password: string
  confirm_password?: string
}