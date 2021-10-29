import { useState } from 'react'

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token')
    const userToken =   tokenString
    return userToken
}
  const [token, setToken] = useState(getToken())
  // console.log(token)

  const  saveToken = (userToken) =>  {
    console.log(userToken)
    sessionStorage.setItem('token',  userToken)
    setToken(userToken)   
}

return {
  setToken: saveToken,
  token
}

}
