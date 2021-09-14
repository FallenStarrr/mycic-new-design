import {Fragment} from 'react'
import { ExampleComment } from './ExampleComment';
import { 
    UserOutlined,  
    DownOutlined,
    RightOutlined,
    LeftOutlined

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
<Row justify="space-between" >
    <Col span={24}>
     <Space>
          <Title level={5}>Поздравляем! </Title>
          <Text  style={{color: "#7449EF", fontSize: "20px", position: "relative", bottom: "5px"}}>Все</Text> 
          </Space>
     
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
</Row>

  <div className="calendar">
      
      <div>Пн</div>
      <div>Вт</div>
      <div>Ср</div>
      <div>Чт</div>
      <div>Пт</div>
      <div className="holiday">Сб</div>
      <div className="holiday">Вс</div>
      <div>27</div>
      <div>28</div>
      <div>29</div>
      <div>30</div>
      <div>1</div>
      <div  className="holiday">2</div>
      <div  className="holiday">3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div  className="holiday-circle">8</div>
      <div  className="holiday">9</div>
      <div  className="holiday">10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div  className="holiday">16</div>
      <div  className="holiday">17</div>
      <div>18</div>
      <div>19</div>
      <div  className="holiday-filled">20</div>
      <div>21</div>
      <div>22</div>
      <div  className="holiday">23</div>
      <div  className="holiday" >24</div>
      <div >25</div>
      <div >26</div>
      <div >27</div>
      <div >28</div>
      <div >29</div>
      <div className=" holiday">30</div>
      <div className=" holiday">1</div>
     
      




  
</div>
<div style={{marginTop: "25px"}}>
<LeftOutlined />
<RightOutlined />
</div>

  

</div>
 

    )
}
