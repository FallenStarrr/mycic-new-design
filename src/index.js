import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

axios.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token')
  console.log(token)
  if (token) {
    // config.data.token_type = `Bearer`
    config.data.token = `${token}`
    console.log(config)
    // console.log(config.token)
    // console.log(config.token_type)
  }
  return config
}, error => {
  return Promise.reject(error)
})


ReactDOM.render(<App />, document.getElementById("root"));
