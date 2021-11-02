import $api from "../http-axios";

export default class AuthService {
  static async login(email, password) {
    return $api.post('login', {email, password})
  }
}