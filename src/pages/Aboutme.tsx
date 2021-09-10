import {Fragment} from 'react'
import React from 'react';
import { 
    UserOutlined,  
    DownOutlined,
    EyeOutlined

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
Collapse,
Table,
Tag,
Steps,
DatePicker 
} 
from 'antd'
import 'antd/dist/antd.css';
import '../styles/post.css';


interface R {
  lastName: string;
}


const { Column, ColumnGroup } = Table;
const { Step } = Steps;
const { TextArea } = Input
const { Panel } = Collapse;

  const { Text, Title } = Typography

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  




 
 


export  function Aboutme() {

    return (


     <>
        <section style={{width:"700px"}} >
          <div className="container">
            <Row justify="center">
              <Col span={10}>
                 <Image src="image 4.png"/>
              </Col>

              <Col span={10}>
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


        <section className="white-section white-section-1" style={{marginRight: "490px"}}>
        <Row justify="space-around">
          <Col>  <Title title="3">Досье</Title>  </Col>
          <Col> <Title title="3"> Мои результаты</Title> </Col>
          <Col>   <Title title="3"> Сенткоины</Title></Col>
        </Row>
        <Divider/>
        </section>




  <section className="white-section-1 white-section-2">
     
  <Collapse defaultActiveKey={['1']}>

    <Panel header="Кадровое перемещение" key="1" >
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

  <section  className="white-section-1 white-section-2" >
    
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




{/***********************************  Card  ************************************ */}

<Row gutter={26} className="white-section-2">
  <Col span={8}>
  <section className="white-section white-section-2-card-small">
      <Image src="image 5.png"></Image>
  </section>

  <section className="white-section white-section-2-card-small"  style={{height: "284px"}}>

    <Space>
    <DatePicker  />
    <DatePicker  />
    </Space>
    <br/>
   <Divider/>
    <Button type="primary" danger>
    <EyeOutlined /> Показать
    </Button>

  

  </section>
  
  </Col>

  <Col span={14}>
  <section className="white-section white-section-2-card  " style={{paddingRight: "100px"}}>

  <Table dataSource={dataSource} columns={columns} />

  {/* <Table dataSource={data}>
    {/* <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup> */}
    {/* <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column<string[]>
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(_, tags) => (
        <>
          {tags.map(tag => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />  */}
     {/* <Column<R>
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table> */} 


  <Button type="primary" danger>
        Потратить Сенткоины
  </Button>
  </section>
  
  </Col>

  

</Row>


      </>     
        



    )
}
