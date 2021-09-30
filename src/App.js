import "./App.css";
import { Aboutme } from "./pages/Aboutme";
import Bday from "./components/Bday";
import Cont from "./components/Cont";
import Sidebar from "./components/Sidebar";
import Head from "./components/Head";
import { Layout, Menu, Divider, Space } from "antd";
import { CloseOutlined, AlignLeftOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import React, { useState } from "react";

import Tests from "./pages/Tests";


const { Header, Sider, Content } = Layout;

function App() {
  const [navbar, setNav] = useState(false);

  return (
    <Router>
      <div className={navbar ? "page active-page" : "page"}>
        <div>
          {navbar ? (
            <CloseOutlined
              className="nav__logo unactive-brand-logo "
              onClick={() => setNav(false)}
            />
          ) : (
            <AlignLeftOutlined
              className="unactive-brand-logo"
              style={{ fontSize: "30px" }}
              onClick={() => setNav(true)}
            />
          )}
        </div>

        <h1 className="nav__heading unactive-brand"> My.cic.kz </h1>
        <nav
          className={
            navbar ? "nav-nav-navigation active" : "nav-nav-navigation"
          }
        >
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to="/aboutme">
                Обо мне
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/news">
                Новости
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/colleagues">
                Коллеги
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/agree">
                Согласование
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="#">
                О Компании
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="#">
                Рейтинг
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="#">
                Шеф говорит
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="#">
                Котировки
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="#">
                Предстраховой осмотр
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="#">
                Уведомления
              </Link>
            </li>

            <li className="nav__item">
              <Link className="nav__link" to="/knowledge">
                Обучение
              </Link>
            </li>
          </ul>
        </nav>
        <Layout>
          <Sider
            className="section sidebar"
            style={{ height: "100vh", backgroundColor: "#F6F6F9" }}
            width={300}
          >
            <Sidebar />
          </Sider>

          <Layout>
            {/* <Header className="section" style={{ backgroundColor: "#F6F6F9" }}>
              <Head />
            </Header> */}

            <Divider></Divider>

            <Content className="section" style={{ marginTop: "240px" }}>
              <Switch>
                <Route path="/news">
                  <Cont></Cont>
                </Route>

                <Route path="/colleagues"></Route>
                <Route path="/agree"></Route>
                <Route path="/studycenter"></Route>
                <Route path="/talks"></Route>
                <Route path="/aboutme">
                  <Aboutme />
                </Route>
                <Route path="/knowledge">
                  <Tests />
                </Route>

                
              </Switch>
            </Content>
          </Layout>

          <Sider
            className="sbday"
            style={{
              backgroundColor: "#F6F6F9",
            }}
            width={350}
          >
            <Bday></Bday>
          </Sider>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
