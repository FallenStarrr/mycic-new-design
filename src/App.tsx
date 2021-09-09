
import './App.css';

import { Sidebar } from './components/Sidebar'
import { 
  Typography, 
  Layout, 
  Menu,  
  Space,
  Divider,
  Avatar, 
  Dropdown
} 
  from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { 
  UserOutlined, 
  DownOutlined
  
} 
from '@ant-design/icons';


const { Header, Sider, Content} = Layout 

const { Title,  Text } = Typography

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item 
      </a>
    </Menu.Item>
    <Menu.Item >
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item </a>
    </Menu.Item>
    
  </Menu>
);




function App() {
  return (
    
    <Layout>
            <Sidebar/>
       
           <Layout>
            <Header style={{backgroundColor: '#F6F6F9',}}>
             <Menu style={{backgroundColor: '#F6F6F9',}} theme="light" mode="horizontal">
            <Menu.Item key="1">О компани</Menu.Item>
            <Menu.Item key="2">Parse</Menu.Item>
            <Menu.Item key="3">Библиотека</Menu.Item>
            <Menu.Item key="4">Рейтинг</Menu.Item>
            <Menu.Item key="5">Шеф говорит</Menu.Item>
            <Menu.Item key="6">KPI</Menu.Item>
            <Menu.Item key="7">
              <Space>
              <Avatar size="large" icon={<UserOutlined />} />
            <Text>Имя Фамилия</Text>
            <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover me <DownOutlined />
    </a>
  </Dropdown>
            </Space>
           
            </Menu.Item>
           
             </Menu>
            
            </Header>
            <Divider></Divider>
            <Content>Content</Content>
            </Layout>
           
            <Sider style={{ marginRight: '60px', height: '70vh', marginTop: '70px', backgroundColor: '#F6F6F9'}}>Sider</Sider>
           
        
      </Layout>
    
  );
}

export default App;
