import React, {useContext, useState} from 'react'
import { Context } from '../index'


const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
const {store} = useContext(Context)

  return (
    <div>
            <input type="text
            "
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
             />
               <input type="password
            "
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
             />
             <button onClick={() => store.login(email, password)}>Логин</button>
    </div>
  )
}

export default LoginForm
