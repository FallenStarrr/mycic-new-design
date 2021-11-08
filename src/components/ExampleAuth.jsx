import {SyntheticEvent, useContext, useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import auth from "../http/auth/auth";
import axios from "axios";
import {Redirect, useHistory} from "react-router-dom";
import {Context} from '../index'

function Auth() {
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
    let his = useHistory();


    // async function handleRequest(e) {
    //   e.preventDefault();

    //   const userInfo = {
    //     email,
    //     password,
    //   };
    //   try {
    //     var resp = await axios.post("http://127.0.0.1:8000/api/login", userInfo);
    //     let token_val = resp.data.token;
    //     // console.log(userInfo)
    //     console.log(resp);

    //     let token = localStorage.setItem("token", token_val);
    //     console.log(token);
    //     // setToken(token);
    //     console.log(resp);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }


    return (
        <Container maxWidth='sm'>
            <Box
                component='form'
                sx={{
                    "& > :not(style)": {
                        m: 1,
                        width: "25ch",
                    },
                }}
                noValidate
                autoComplete='off'
            >
                <h1 className='mt-5'> Логин </h1>

                <div>
                    <TextField
                        style={{
                            width: "20vw",
                            height: "20vh",
                        }}
                        className='mt-5'
                        id='outlined-basic'
                        name='email'
                        label='Email'
                        variant='outlined'
                    />
                </div>

                <div>
                    <TextField
                        style={{
                            width: "20vw",
                            height: "20vh",
                        }}
                        className='mt-5'
                        id='outlined-basic'
                        label='Пароль'
                        variant='outlined'
                        name='password'
                    />
                </div>

                <Button variant='contained' type='submit' className='mb-5'>
                    Войти{" "}
                </Button>
            </Box>
            {/* ******************* */}


        </Container>
    );
}

export default Auth;
