import {Fragment} from 'react'
import React from 'react';
import { 
    UserOutlined,  
    DownOutlined,

  } 
  from '@ant-design/icons';

import { 
Menu,
Space,
Avatar,
Dropdown, 
Typography,
Image,
Row,
Col,
Comment,
Form, Button, List, Input
} 
  from 'antd'
  import 'antd/dist/antd.css';
  import '../styles/post.css';


const { TextArea } = Input

  const { Text, Title } = Typography

  





 
 


export  function Aboutme() {
    return (



        <section style={{width:"700px"}}>
          <div className="container">
            <Row>
              <Col span={10}>
                 <Image src="image 4.png"/>
              </Col>

              <Col span={14}>
                <section className="white-section">
               <Title>
                   Алексей Щербаков
               </Title>
               <Text>Бухгалтер</Text>
              <Row>
               <Col span={12}>День рождения:</Col>
               <Col span={12}><strong>15 декабря</strong> </Col>
               <Col span={12}>Образование:</Col>
               <Col span={12}><strong>МГУ</strong> </Col>
               <Col span={12}>Город:</Col>
               <Col span={12}><strong>Москва</strong></Col>
              </Row> 
              </section>
              </Col>
            </Row>
             
          </div>
           
        </section>

       
        



    )
}
