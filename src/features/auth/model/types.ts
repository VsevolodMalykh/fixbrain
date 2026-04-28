export type TUser = {
    username: string
    email: string
    password: string
}

export type TUserRespose = {
    user: TUser
    accessToken: string
    refreshToken: string
}

