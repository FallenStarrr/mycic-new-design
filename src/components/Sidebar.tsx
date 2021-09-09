import { 
    UserOutlined, 
    TeamOutlined, 
    CheckSquareOutlined, 
    BookOutlined, 
    MailOutlined, 
    EyeOutlined,  
  } 
  from '@ant-design/icons';

import { 
Layout,
Typography, 
Menu,
Col, 
Row,
Space,
} 
  from 'antd'



  const { Title  } = Typography

 


export default function Sidebar() {
    return (


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


    )
}
