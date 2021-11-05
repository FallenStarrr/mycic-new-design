import React, { useContext, useState, useEffect, useRef } from "react";
import { Context } from "../index";
import $api from "../http-axios";
import axios from "axios";
import "./main.css";
import "./app.css";
import users from "./users-white-image.png";
import logo from "./new-white-logo.png";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store } = useContext(Context);
  const inputEl = useRef(null);

  function show() {
 
    if (inputEl.current.getAttribute('type') === 'password') {
      inputEl.current.setAttribute('type', 'text')
    } else {
      inputEl.current.setAttribute('type', 'password')
    }
  }
  return (
    <div>
      {/*    <!-- Main --> */}
      <div className='main' style={{overflow: 'hidden'}}>
        <div className='preloader' id='preloader'>
          <div className='item-1'></div>
          <div className='item-2'></div>
          <div className='item-3'></div>
          <div className='item-4'></div>
          <div className='item-5'></div>
        </div>
        {/*      <!-- Container --> */}
        <div className='container-fluid'>
          {/*      <!-- Container --> */}
          <div className='row'>
            <div className='col-lg-12'>
              <div className='header'>
                <img src={logo} alt='Centras Logo' className='header__logo' />
              </div>
            </div>
          </div>
          {/*   <!-- First row -->  */}
          {/*       <!--Second row-->  */}
          <div id='login' className='row'>
            <div className='col-lg-6 column-1' style={{ borderRight: '4px solid white'}}>
              <h1 className='title'>
                <span className='title__welcome'>Добро пожаловать в</span>{" "}
                <strong className='title__main'>my.cic.kz</strong>
              </h1>
              <div className='social-network'>
                <p className='social-network__title'>
                  Подписывайтесь на наши обновления
                </p>
                <div className='social-network__icons'>
                  <a
                    href='http://www.instagram.com/centras.insurance/'
                    className='social-network__link'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='36'
                      height='36'
                      fill='white'
                      class='bi bi-instagram'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />
                    </svg>
                  </a>
                  <a
                    href='http://www.facebook.com/kupipolis.kz/'
                    className='social-network__link'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='36'
                      height='36'
                      fill='white'
                      class='bi bi-facebook'
                      viewBox='0 0 16 16'
                    >
                      <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                    </svg>
                  </a>
                  <a
                    href='http://www.youtube.com/channel/UCf2GyNgEwFys5JdN4g6x4LQ'
                    className='social-network__link'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='36'
                      height='36'
                      fill='white'
                      class='bi bi-youtube'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z' />
                    </svg>
                  </a>
                </div>
              </div>
              <div className='line'></div>
            </div>
            <div className='col-lg-6 column-2'>
              <div className='users d-flex justify-content-center'>
                <img src={users} alt='users image' className='users__image' />
              </div>
              <div className='login-form'>
              <form action="" >
                <div className='input-container d-flex justify-content-center'>
                  <div className='input-container__background'>
                    <svg
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      width='36'
                      height='36'
                      fill='currentColor'
                      class='bi bi-person'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
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
                      class='bi bi-lock'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z' />
                    </svg>
                    <input
                      ref={inputEl}
                      id='password'
                      placeholder='Пароль'
                      type='password'
                      className='input-field'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type='button' className='show-btn' onClick={show}>
                      <svg
                        aria-hidden='true'
                        id='icon'
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        class='bi bi-eye'
                        viewBox='0 0 16 16'
                      >
                        <path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z' />
                        <path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z' />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='d-flex justify-content-center'>
                  <button
                    className='btn-block'
                    onClick={() => store.login(email, password)}
                  >
                    Войти
                     </button>
                    </div>
                </form>
              </div>
              <div></div>
            </div>
          </div>
          {/*<!--Second row--> */}
          {/* <!--Third row--> */}
          <div className='row row-3'>
            <div className='col-lg-12'>
              <p className='footer-title'>
                <small className='footer-title__inner'>
                  ©1997-2021 АО "Страховая Компания "Сентрас Иншуранс"
                </small>
                <small className='footer-title__inner'>
                  Все права защищены
                </small>
              </p>
            </div>
          </div>
          {/* <!--Third row-->*/}
        </div>
        {/*<!-- Container -->*/}
      </div>
      {/*<!-- Main -->  */}
    </div>
  );
};

export default Auth;
