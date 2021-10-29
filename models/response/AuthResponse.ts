import { IUser } from './../IUser';
export interface AuthResponse {
        token: string,
        user: IUser
}

//original https://www.youtube.com/watch?v=fN25fMQZ2v0&t=4552s
interface AuthResponse2 {
   accessToken: string,
   refreshToken: string,
   user: IUser
}