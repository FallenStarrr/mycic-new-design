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

export default function Post({
  posts,
  setPost,
  deletePost,
  editPost,
  showEdit,
  setShowEdit,
  smile
}) {
  const [editVal, setEditVal] = useState("");
  const [like, setLike] = useState(0);
  let [comment, setComment] = useState([]);
  let [comDetails, setComDetails] = useState({ name: "", text: "" });
  const img_file = useRef();

  function sendPost(post) {
    post.text = editVal;
    setEditVal("");
    setShowEdit(false);
    console.log(img_file.files);
  }

  // Likes tried to insist on 1 like per person and decrement in case of unlike
  function handleLike() {
    setLike(like + 1);
    if (like < like + 1) {
      return;
    }
  }

  //Added reply
  function addCom() {
    setComment([
      ...comment,
      {
        name: comDetails.name,
        text: comDetails.text,
        id: Date.now(),
        reply: [{ name: "John", text: "Text", id: Date.now() }],
        emoji: ''
      },
    ]);
    console.log(comment);
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
                  <Text>
                    {showEdit ? (
                      <Form.Item>
                        <TextArea
                          rows={4}
                          value={editVal}
                          onChange={(e) => setEditVal(e.target.value)}
                        />
                      </Form.Item>
                    ) : (
                      `${ post.text} ${post.emoji}` 
                    )}
                  </Text>
                </Col>
                <Col span='24'>
                  <Image
                    src={img_file.value ? img_file.value : "image2.png"}
                    width='200'
                  />
                </Col>
                <Col>
                  {like}{" "}
                  <HeartFilled className='purp-icon' onClick={handleLike} />
                  <MessageFilled className='purp-icon' />
                </Col>
                <Col style={{ marginTop: "20px" }}>
                  {comment.map((com) => (
                    <ExampleComment
                      text={com.text}
                      name={com.name}
                      id={com.id}
                      comment={comment}
                      setComment={setComment}
                    >
                      {com.reply.map((repl) => (
                        <ExampleComment
                          actions={[
                            <span key='comment-nested-reply-to'>Reply to</span>,
                          ]}
                          author={<a>{repl.name}</a>}
                          avatar={
                            <Avatar
                              src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                              alt='Han Solo'
                            />
                          }
                          content={repl.text +  ' ' + smile}
                        />
                      ))}
                    </ExampleComment>
                  ))}
                </Col>
                <Col span={24} className="mt-3">
                  <Form.Item>
                    <div>
                      <label htmlFor='name'>Your name:</label>
                      <input
                        id='name'
                        value={comDetails.name}
                        onChange={(e) =>
                          setComDetails({ ...comDetails, name: e.target.value })
                        }
                        class='form-control'
                      />
                    </div>
                  </Form.Item>

                  <Form.Item>
                    <TextArea
                      rows={4}
                      value={comDetails.text}
                      onChange={(e) =>
                        setComDetails({ ...comDetails, text: e.target.value })
                      }
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType='submit' type='primary' onClick={addCom}>
                      Add Comment
                    </Button>
                    <Form.Item />
                    <Form.Item>
                      <Button
                        htmlType='submit'
                        type='danger'
                        className='mt-5'
                        onClick={() => deletePost(post.id)}
                      >
                        Delete Post
                      </Button>
                      <Button
                        htmlType='submit'
                        type='primary'
                        onClick={editPost}
                      >
                        Edit Post
                      </Button>
                      <Button
                        htmlType='submit'
                        type='primary'
                        onClick={() => sendPost(post)}
                      >
                        Ok Post
                      </Button>

                      <input ref={img_file} type='file' />
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
