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
Form, Button, List, Input, Divider,
Collapse
} 
  from 'antd'
  import 'antd/dist/antd.css';
  import '../styles/post.css';

  import { Steps } from 'antd';

  const { Step } = Steps;

const { TextArea } = Input
const { Panel } = Collapse;

  const { Text, Title } = Typography

  





 
 


export  function Aboutme() {
    return (


     <>
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


        <section className="white-section white-section-1 white-section-2">
        <Row justify="space-around">
          <Col>  <Title title="3">Досье</Title>  </Col>
          <Col> <Title title="3"> Мои результаты</Title> </Col>
          <Col>   <Title title="3"> Сенткоины</Title></Col>
        </Row>
        <Divider/>
        </section>




  <section className="white-section-1 white-section-2">
    
  <Collapse defaultActiveKey={['1']}>
     
    <Panel header="Кадровое перемещение" key="1">
       <Steps direction="vertical" size="small" current={1}>
       <Step title="Finished" description="This is a description." />
       <Step title="In Progress" description="This is a description." />
       <Step title="Waiting" description="This is a description." />
       </Steps>   
     </Panel>
  </Collapse>

  </section>

  <section  className="white-section-1  white-section-2">
 
  <Collapse defaultActiveKey={['1']}>
     <Panel header="Административные дни" key="1">
       <Steps direction="vertical" size="small" current={1}>
           <Step title="Finished" description="This is a description." />
           <Step title="In Progress" description="This is a description." />
           <Step title="Waiting" description="This is a description." />    
         </Steps> 
      </Panel>
  </Collapse>


  </section>

  <section  className="white-section-1 white-section-2">
 
  <Collapse defaultActiveKey={['1']}>
     <Panel header="Больничные дни" key="1">
     <Steps direction="vertical" size="small" current={1}>
       <Step title="Finished" description="This is a description." />
       <Step title="In Progress" description="This is a description." />
       <Step title="Waiting" description="This is a description." />
       </Steps>

    </Panel>
  </Collapse>
  </section>

  <section  className="white-section-1 white-section-2">
    
  <Collapse defaultActiveKey={['1']}>
     <Panel header="Отпуск" key="1">
     <Steps direction="vertical" size="small" current={1}>
       <Step title="Finished" description="This is a description." />
       <Step title="In Progress" description="This is a description." />
       <Step title="Waiting" description="This is a description." />
       </Steps>
    </Panel>
  </Collapse>
  </section>

      </>     
        



    )
}
