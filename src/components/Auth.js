import  {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import auth from '../http/auth/auth'
import axios from 'axios'
const Auth = () => {
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
}, error => {
  return Promise.reject(error )
})

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  async  function handleRequest(e) {
        e.preventDefault()
        const data = {
          email,
          password
        }

        try {
          const resp = await axios.post('http://127.0.0.1:8000/api/login' , data)
          let token =   localStorage.setItem('token', resp.headers.Authorization.split(' ')[1])
          console.log(resp)
          return resp

        } catch(e)
        {
          console.log(e)
        }
     

  }


  return (
    <Container maxWidth="sm">
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleRequest}
    >
            <h1>Логин</h1>
            
            <div>
            <TextField 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
             id="outlined-basic" 
            name="email" 
            label="Email" 
            variant="outlined" />

            </div>
            <div>
            <TextField 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="outlined-basic" 
            label="Пароль" 
            variant="outlined" 
              name="password"
            
            />

            </div>
            <Button variant="contained" type="submit">Войти</Button>
    </Box>
    </Container>
  )
}

export default Auth
