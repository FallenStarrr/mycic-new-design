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
Form, Button, List, Input
} 
  from 'antd'
  import 'antd/dist/antd.css';
  import '../styles/post.css';

import React from 'react';

const { TextArea } = Input

  const { Text } = Typography

  





 
 


export default function Post() {
    return (
<React.Fragment>
    <Row className="container">
       
         
            <Col>
            <Space>
              <Avatar size="large" icon={<UserOutlined />} /> 
              <Text>Jogn Doe</Text>
          
           </Space>
        </Col>
        <br/>

      <Col>
        <Text>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Text>
      </Col>  


         <Col>
           <Image     
           src="image2.png"
           width="200"
           /> 
         </Col>
         <Col style={{marginTop: "20px"}}>
           <ExampleComment  />
         </Col>

    <Col span={24}>
         
     <Form.Item>
         <TextArea rows={4}  />
     </Form.Item>
     <Form.Item>
      <Button htmlType="submit"  type="primary">
        Add Comment
      </Button>
     </Form.Item>
         
   </Col>
         
</Row>

</React.Fragment>
    )
}
