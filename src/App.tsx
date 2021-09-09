
import './App.css';
import { 
  Typography, 
  Layout, 
  Menu,  
  Row, 
  Col,
  Space 
} 
  from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { 
  UserOutlined, 
  TeamOutlined, 
  CheckSquareOutlined, 
  BookOutlined, 
  MailOutlined, 
  EyeOutlined,
  
} 
from '@ant-design/icons';

const { Header, Footer, Sider, Content} = Layout 

const { Title } = Typography


function App() {
  return (
    <>
    <Layout>
        <Sider width={250} style={{height: '100vh', backgroundColor: 'white'}}>
        <Menu className="nav">
          <Row>
            <Col span={24}><Title level={2} style={{color: '#0057FF', paddingLeft: '50px' }}>My.cic.kz</Title></Col>
            <Col span={24}><Menu.Item   className="nav__item"key="1"><Space><UserOutlined  className="purp-icon" />Обо мне</Space></Menu.Item></Col>
            <Col span={24}><Menu.Item  className="nav__item"key="2"><Space><MailOutlined className="purp-icon" />Новости</Space></Menu.Item></Col>
            <Col span={24}><Menu.Item className="nav__item" key="3"> <Space><TeamOutlined className="purp-icon" />Коллеги</Space></Menu.Item></Col>
            <Col span={24}><Menu.Item  className="nav__item"key="4"> <Space><CheckSquareOutlined className="purp-icon" /> Согласование</Space></Menu.Item></Col>
            <Col span={24}> <Menu.Item  className="nav__item "key="5">  <BookOutlined className="purp-icon purp-icon-move" />Центр знаний</Menu.Item></Col>
            <Col span={24}><Menu.Item className="nav__item" key="6">  <Space><EyeOutlined className="purp-icon" />На переговоры</Space></Menu.Item></Col>
          </Row>
              </Menu>
        </Sider>
        <Layout>
            <Header style={{backgroundColor: 'white',}}>
             <Menu  theme="light" mode="horizontal">
            <Menu.Item key="1">О компани</Menu.Item>
            <Menu.Item key="2">Parse</Menu.Item>
            <Menu.Item key="3">Библиотека</Menu.Item>
            <Menu.Item key="4">Рейтинг</Menu.Item>
            <Menu.Item key="5">Шеф говорит</Menu.Item>
            <Menu.Item key="6">KPI</Menu.Item>

             </Menu>
            </Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
