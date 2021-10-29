import {
  SyntheticEvent,
  useState
} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import auth from '../http/auth/auth'
import axios from 'axios'
import   {Redirect, useHistory} from 'react-router-dom'
function Auth () {
  // axios.interceptors.request.use((config) => {
  //   const token = localStorage.getItem('token')
  //   debugger;
  //   // console.log(token)
  //   if (token) {
  //     config.data.token_type = `Bearer`
  //     config.data.token = `${token}`
  //     console.log(config)
  //     //console.log(config.token)
  //     // console.log(config.token_type)
  //   }
  //   return config
  // }, error => {
  //   return Promise.reject(error)
  // })
  let his = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  

   async function handleRequest(e) {
    e.preventDefault()


   

    const userInfo = {
      email,
      password
    }
    try {
      var resp = await axios.post('http://127.0.0.1:8000/api/login', userInfo)
      let token_val = resp.data.token
      // console.log(userInfo)
      console.log(resp)
    
      
      let token = localStorage.setItem('token', resp.data.token)
      console.log(token)
     
     his.push('/aboutme')
      console.log(resp)
    } catch (e) {
      console.log(e)
    }
  }
  return (

    <Container maxWidth="sm" >

      <Box component="form"
      onSubmit={handleRequest}
        sx={
          {
            '& > :not(style)': {
              m: 1,
              width: '25ch'
            },
          }
        }
        noValidate autoComplete="off">
        <h1 className="mt-5" > Логин </h1>

        <div>
          <TextField style={
              {
                width: '20vw',
                height: '20vh'
              }
            }
            className="mt-5"
            onChange={
              (e) => setEmail(e.target.value)
            }
            value={
              email
            }
            id="outlined-basic"
            name="email"
            label="Email"
            variant="outlined" />
          </div>

          <div>

            <TextField style={
                {
                  width: '20vw',
                  height: '20vh'
                }
              }
              className="mt-5"
              onChange={
                (e) => setPassword(e.target.value)
              }
              value={
                password
              }
              id="outlined-basic"
              label="Пароль"
              variant="outlined"
              name="password" /
            >
            </div>

            <Button variant="contained"
              type="submit"
              className="mb-5" >
              Войти </Button>

              </Box>

              </Container>
              )
}

export default Auth