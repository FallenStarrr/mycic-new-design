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
import { useState } from "react";

const { Header, Sider, Content } = Layout;

function App() {
  const [navbar, setNav] = useState(false);

  return (
    <Router>
      <div className={navbar ? 'page active-page': 'page'}>
        <div>
        { navbar ?
             
             <CloseOutlined
              className="nav__logo unactive-brand-logo "
              onClick={() => setNav(false)}
            /> 

            :
            <AlignLeftOutlined   className="unactive-brand-log" style={{fontSize: '30px'}} onClick={() => setNav(true)}/>


     }

        </div>
    
      <h1 className="nav__heading unactive-brand" > My.cic.kz </h1>
        <nav
          className={
            navbar ? "nav-nav-navigation active" : "nav-nav-navigation"
          }
        >
          <ul className="nav__list">
            <div className="nav__brand">
             
             
            </div>

            <li className="nav__item">
              <a className="nav__link" href="#">
                Обо мне
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Новости
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Коллеги
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Согласование
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                О Компании
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Рейтинг
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Шеф говорит
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Котировки
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Предстраховой осмотр
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Уведомления
              </a>
            </li>
          </ul>
        </nav>
        <Layout>
          {/* <Sider
            className="section"
            style={{ height: "100vh", backgroundColor: "#F6F6F9" }}
            width={300}
          >
         
            <Sidebar />
        

          </Sider> */}

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
              </Switch>
            </Content>
          </Layout>

          {/* <Sider
            className="section"
            style={{
              backgroundColor: "#F6F6F9",
              position: "absolute",
              right: "80px",
              top: "140px",
            }}
            width={350}
          >
            <Bday></Bday>
          </Sider> */}
        </Layout>
      </div>
    </Router>
  );
}

export default App;
