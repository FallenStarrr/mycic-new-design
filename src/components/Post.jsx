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

import React, { useState } from "react";
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

export default function Post({ posts, setPost, deletePost }) {
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
                  <Text>{post.text}</Text>
                </Col>
                <Col span='24'>
                  <Image src='image2.png' width='200' />
                </Col>
                <Col>
                  56 <HeartFilled className='purp-icon' /> 23{" "}
                  <MessageFilled className='purp-icon' />
                </Col>
                <Col style={{ marginTop: "20px" }}>
                  <ExampleComment />
                </Col>
                <Col span={24}>
               
                  <Form.Item>
                    <TextArea rows={4} />
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType='submit' type='primary'>
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
