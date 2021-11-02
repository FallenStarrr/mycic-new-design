import axios from "axios";
import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./store/store";

// axios.interceptors.request.use((config) => {
//   const token = sessionStorage.getItem('token')
//   console.log(token)
//   // if (!token) {
//   //   // config.data.token_type = `Bearer`
//   //   config.data.token = `${token}`
//   //   console.log(config)
//   //   // console.log(config.token)
//   //   // console.log(config.token_type)
//   // }
//   return config
// }, error => {
//   return Promise.reject(error)
// })



const store = new Store()

export const Context = createContext({
  store
})

ReactDOM.render(
<Context.Provider value={{
    store
}}>
        <App />
</Context.Provider>
, 
  document.getElementById("root"));
