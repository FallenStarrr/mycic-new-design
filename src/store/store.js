import { makeAutoObservable } from "mobx"
import AuthService from "../services/AuthServices"

export default class Store {
          user = {}
          isAuth = false



        constructor() {
              makeAutoObservable(this)
        }

        getAuth() {
          return this.isAuth
        }

        setAuth(bool) {
          this.isAuth = bool
        }

        setUser(user) {
          this.user = user
        }

        async login (email, password) {
                 try {
                    const response = await AuthService.login(email, password) 
                    console.log(response)
                    localStorage.setItem('token', response.data.token)
                    this.setAuth(true)
                    this.setUser(response.data.token)
                 }  catch(e) {
                      console.log(e.response?.data?.message)
                 }
        }
}