import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { ExampleComment } from "./ExampleComment";
import {
  UserOutlined,
  DownOutlined,
  HeartFilled,
  MessageFilled,
} from "@ant-design/icons";

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
  Form,
  Button,
  List,
  Input,
} from "antd";
import "antd/dist/antd.css";
import "../styles/post.css";

import React, { useState, useRef } from "react";
import axios from "axios";
import { API_URL } from "../http-axios";

const { TextArea } = Input;

const { Text } = Typography;

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Post({ posts, setPost, deletePost, editPost, showEdit, setShowEdit }) {
    const [editVal, setEditVal] = useState('')
    const [like, setLike] = useState(0)
    let [comment, setComment] = useState([{
        name: 'John Smith',
        text: 'hello world'
    }])
    let [comDetails, setComDetails] = useState({name: '', text: ''})
    const img_file = useRef()
  
    function sendPost(post) {
            post.text = editVal
            setEditVal('')
            setShowEdit(false)
            console.log(img_file.files)
    } 

    function handleLike() {
        setLike(like + 1)
    }

    function addCom() { 
        setComment([...comment, {name: comDetails.name, text: comDetails.text}])
    }
  return (
    <React.Fragment>
      <div>
        {posts.map((post) => {
          return (
            <Row style={{ textAlign: "center" }}>
              <div
                style={{ margin: "auto", maxWidth: "1100px", padding: "30px" }}
              >
                <Col>
                  <Space>
                    <Avatar size='large' icon={<UserOutlined />} />
                    <Text>{post.author ? post.author : "Author"}</Text>
                  </Space>
                </Col>
                <br />

                <Col>
                  <Text>{
                      showEdit ? 
                      <Form.Item>
                        <TextArea rows={4} value={editVal} onChange={(e) => setEditVal(e.target.value)} />
                  </Form.Item>
                   : post.text
                   }</Text>
                </Col>
                <Col span='24'>
                  <Image src={ img_file.value ?  img_file.value : 'image2.png'} width='200' />
                </Col>
                <Col>
                  {like} <HeartFilled className='purp-icon' onClick={handleLike} /> 
                  <MessageFilled className='purp-icon' />
                </Col>
                <Col style={{ marginTop: "20px" }}>
                {
                   comment.map(com =>  <ExampleComment text={com.text} name={com.name}/>
                   ) 
                }
                  <ExampleComment />
                </Col>
                <Col span={24}>
                <Form.Item>
                <div>
                                <label htmlFor="name">Your name:</label>
                                <input  
                                id="name"
                                value={comDetails.name} 
                                onChange={(e) => setComDetails({...comDetails, name: e.target.value})} 
                                class="form-control"
                                />

                            </div>
                
                </Form.Item>
               
                  <Form.Item>
                    <TextArea rows={4}  value={comDetails.text} onChange={(e) => setComDetails({ ...comDetails,  text: e.target.value}) }/>
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType='submit' type='primary' onClick={addCom}>
                      Add Comment
                    </Button>
                    <Form.Item>
                      <Button
                        htmlType='submit'
                        type='danger'
                        className='mt-5'
                        onClick={() => deletePost(post.id)}
                      >
                        Delete Comment
                      </Button>
                      <Button htmlType='submit' type='primary' onClick={editPost}>
                                  Edit
                    </Button>
                    <Button htmlType='submit' type='primary' onClick={() => sendPost(post)}>
                                  Ok
                    </Button>

                    <input ref={img_file} type="file"/>
                    </Form.Item>
                  </Form.Item>
                </Col>
              </div>
            </Row>
          );
        })}
      </div>
      <Carousel className='w-50 m-auto '>
        <Carousel.Item>
          <img className='d-block w-100' src='image 4.png' alt='First slide' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src='image 4.png' alt='Second slide' />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src='image 4.png' alt='Third slide' />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
}
