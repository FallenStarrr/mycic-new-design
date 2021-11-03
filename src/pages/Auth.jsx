import React, { useContext, useState, useEffect } from "react";
import { Context } from "../index";
import $api from "../http-axios";
import axios from "axios";
import './main.css';
import './app.css';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store } = useContext(Context);



  return (
    <div>
      {/*    <!-- Main --> */}
      <div className='main'>
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
                <img
                  src='./My.cic.kz_files/new-white-logo.png'
                  alt='Centras Logo'
                  className='header__logo'
                />
              </div>
            </div>
          </div>
          {/*   <!-- First row -->  */}
          {/*       <!--Second row-->  */}
          <div id='login' className='row'>
            <div className='col-lg-6 column-1'>
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
                    <i aria-hidden='true' className='fa fa-instagram'></i>
                  </a>
                  <a
                    href='http://www.facebook.com/kupipolis.kz/'
                    className='social-network__link'
                  >
                    <i aria-hidden='true' className='fa fa-facebook-square'></i>
                  </a>
                  <a
                    href='http://www.youtube.com/channel/UCf2GyNgEwFys5JdN4g6x4LQ'
                    className='social-network__link'
                  >
                    <i aria-hidden='true' className='fa fa-youtube-play'></i>
                  </a>
                </div>
              </div>
              <div className='line'></div>
            </div>{" "}
            <div className='col-lg-6 column-2'>
              <div className='users d-flex justify-content-center'>
                <img
                  src='./My.cic.kz_files/users-white-image.png'
                  alt='users image'
                  className='users__image'
                />
              </div>
              <div className='login-form'>
                <div className='input-container d-flex justify-content-center'>
                  <div className='input-container__background'>
                    <i aria-hidden='true' className='fa fa-user-o fa-input'></i>
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
                    <i aria-hidden='true' className='fa fa-lock fa-input'></i>
                    <input
                      id='password'
                      placeholder='Пароль'
                      type='password'
                      className='input-field'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='button' className='show-btn'>
                      <i aria-hidden='true' id='icon' className='fa fa-eye'></i>
                    </button>
                  </div>
                </div>
                <div className='d-flex justify-content-center'>
                  <button className='btn-block' onClick={() =>store.login(email, password)}>Войти</button>
                </div>
              </div>{" "}
              <div></div>
            </div>
          </div>{" "}
          {/*<!--Second row--> */}
          {/* <!--Third row--> */}
          <div className='row row-3'>
            <div className='col-lg-12'>
              <p className='footer-title'>
                <small className='footer-title__inner'>
                  ©1997-2021 АО "Страховая Компания "Сентрас Иншуранс"
                </small>
                <small className='footer-title__inner'>Все права защищены</small>
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
