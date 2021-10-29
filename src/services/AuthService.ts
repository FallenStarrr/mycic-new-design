import { AuthResponse } from './../../models/response/AuthResponse';
import $api from '../http-axios'
import { AxiosResponse } from 'axios'

export default class AuthService {
  static  async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
      return $api.post('/login', {email, password})
  }


  static  async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post('/registration', {email, password})
}
}