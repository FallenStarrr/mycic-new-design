import {Fragment} from 'react'
import { ExampleComment } from './ExampleComment';
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
Form, Button, List, Input,
Calendar
} 
  from 'antd'
  
  
  
import { AudioOutlined } from '@ant-design/icons';



  
  import 'antd/dist/antd.css';
  import '../styles/bday.css';

import React from 'react';
import Avatars from './Avatars';


  const { Text, Title } = Typography

  





 
 


export default function Bday() {
    return (
<div className="bday-container"> 
<Row justify="space-between">
    <Col>
     
          <Title level={5}>Поздравляем! </Title>
         
     
    </Col>

    <Col>
       <Text  style={{color: "#7449EF", fontSize: "20px"}}>Все</Text> 
    </Col>
  
<Col>
 <Avatars/>
 <Text>Имя Фамилия</Text>
</Col> 
 
<Col>
 <Avatars/>
 <Text>Имя Фамилия</Text>
</Col>
<Col>
 <Avatars/>
 <Text>Имя Фамилия</Text>
</Col>

</Row>



<Row justify="space-between" style={{marginTop: "20px"}}>
    <Col>
     
          <Title level={5}>Лучшие продавцы </Title>
         
     
    </Col>

    <Col>
       <Text  style={{color: "#7449EF", fontSize: "20px"}}>Все</Text> 
    </Col>
</Row>

   <Row style={{marginTop:"20px"}}>
 
     <Col span={8}>
      
             <Col>
                <Avatars/> 
                <Text>Имя Фамилия</Text>
             </Col>
            
         
    </Col> 

     <Col span={8}>
         <Avatars/>
         <Text>Имя Фамилия</Text>
    </Col>

    <Col span={8}>
         <Avatars/>
         <Text>Имя Фамилия</Text>
    </Col>



  <Col span={8}>
         <Avatars/>
         <Text>Имя Фамилия</Text>
  </Col >

  <Col span={8}>
        <Avatars/>
        <Text>Имя Фамилия</Text>   
  </Col>

  <Col span={8}>
        <Avatars/>
        <Text>Имя Фамилия</Text>  
  </Col>
 

 
  <Col span={8}>
  <Avatars/>
  <Text>Имя Фамилия</Text> 
  </Col>


   <Col span={8}>
   <Avatars/>
   <Text>Имя Фамилия</Text> 
   </Col>


   <Col span={8}>
        <Avatars/>
        <Text>Имя Фамилия</Text> 
   </Col>


  <Col span={24}>
       <Avatars/>
       <Text>Имя Фамилия</Text>
  </Col>


  <div className="site-calendar-demo-card">
  <Calendar fullscreen={false} />
</div>

</Row>

 
</div>
    )
}
