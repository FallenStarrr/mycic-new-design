import React, {useEffect, useRef, useState} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import axios, { AxiosResponse } from "axios";
import {API_URL} from "../http-axios";
import ShowIcon from '@mui/icons-material/Visibility';
import ShowOffIcon from '@mui/icons-material/VisibilityOff';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    let history = useHistory();

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    async function handleSubmit(e: any) {
        e.preventDefault();

        interface IToken {
            token:  string
            email: string
         password: string
        }

        axios.post(`${API_URL}/login`, {
            email,
            password
        })
            .then((res: AxiosResponse<any>) => {
                localStorage.setItem('token', res.data.token)
                history.push('/news')
            })
            .catch(err => {
                console.log(err)
            })
    }

    /*    React.useEffect(() => {
            const config = {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            };
            axios.get(`${API_URL}/news`, config).then(
                res => {
                    console.log('INNEWS '+ localStorage.getItem('token'))
                    console.log(res);
                },
                err => {
                    console.log(err)
                }
            )
        }, [])*/


    return (
        <form onSubmit={handleSubmit}>
            <div className='login-form'>
                <div className='input-container d-flex justify-content-center'>
                    <div className='input-container__background'>
                        <svg
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            width='36'
                            height='36'
                            fill='currentColor'
                            className='bi bi-person'
                            viewBox='0 0 16 16'
                        >
                            <path
                                d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z'/>
                        </svg>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            placeholder='Логин'
                            className='input-field'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className='input-container d-flex justify-content-center'>
                    <div className='input-container__background'>
                        <svg
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            width='36'
                            height='26'
                            fill='currentColor'
                            className='bi bi-lock'
                            viewBox='0 0 16 16'
                        >
                            <path
                                d='M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z'/>
                        </svg>
                        <input
                            id='password'
                            placeholder='Пароль'
                            type={showPassword ? "text" : "password"}
                            className='input-field'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button type='button'
                                className='show-btn'
                                onClick={togglePassword}>
                            {showPassword ? <ShowIcon/> : <ShowOffIcon/>}
                        </button>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <button
                        className='btn-block'
                    >Войти
                    </button>
                </div>
            </div>
        </form>
    )
}
export default LoginForm;
