import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { ExampleComment } from "./ExampleComment";
import {
  UserOutlined,
  DownOutlined,
  HeartFilled,
  MessageFilled,
} from "@ant-design/icons";
import editIcon from "./writer.png";

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

import React, { useState, useRef, FC } from "react";
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

interface IPost {
  author: string;
  text: string;
  emoji: string;
  id: number;
}

interface IPosts {
  posts: IPost[];
  showEdit: boolean;
  setPost: (arr: IPost[]) => void;
  deletePost: (id: number) => void;
  editPost: () => void;
  setShowEdit: (show: boolean) => void;
}

const Post: FC<IPosts> = ({
  posts,
  setPost,
  deletePost,
  editPost,
  showEdit,
  setShowEdit,
}) => {
  interface IComment {
    name: string;
    text: string;
    emoji?: string;
    id: number;
  }

  interface IComments {
    name: string;
    text: string;
    emoji?: string;
    id: number;
    reply?: IComment[];
  }

  interface IDetails {
    name: string;
    text: string;
  }

  const [editVal, setEditVal] = useState<string>("");
  const [like, setLike] = useState<number>(0);
  let [comment, setComment] = useState<IComments[]>([]);
  let [comDetails, setComDetails] = useState<IDetails>({ name: "", text: "" });
  const img_file = useRef();

  // Show and hide comments
  const [showComments, setShowComments] = useState<boolean>(true);

  function handleComments() {
    setShowComments(!showComments);
    console.log(showComments);
  }

  // Just change state of post by val of Edit
  function sendPost(post: IPost) {
    post.text = editVal;
    setEditVal("");
    setShowEdit(false);
  }

  // Likes tried to insist on 1 like per person and decrement in case of unlike
  function handleLike() {
    setLike(like + 1);
    if (like < like + 1) {
      return;
    }
  }

  // !Added reply
  // TODO: Responses for comments
  // ? How can I add replies to reply arr?
  //*  I have one default arr el
  /*@param  para*/

  function addCom() {
    setComment([
      ...comment,
      {
        name: comDetails.name,
        text: comDetails.text,
        id: Date.now(),
        reply: [{ name: "John", text: "Text", id: Date.now() }],
        emoji: "",
      },
    ]);
    console.log(comment);
  }

  let comments = comment.map((com) => (
    <ExampleComment
      text={com.text}
      name={com.name}
      id={com.id}
      comment={comment}
      setComment={setComment}
    />
    // {com.reply?.map((repl) => (
    //     <ExampleComment
    //       actions={[<span key='comment-nested-reply-to'>Reply to</span>]}
    //       author={<a>{repl.name}</a>}
    //       avatar={
    //         <Avatar
    //           src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    //           alt='Han Solo'
    //         />
    //       }
    //       content={repl.text + " " }
    //     />
    //   ))}
    // </ExampleComment>
  ));
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
                  <img
                    src={editIcon}
                    alt=''
                    width='40px'
                    style={{ position: "relative", left: "500px" }}
                    onClick={editPost}
                  />

                  <i
                    className='fas fa-clipboard-check'
                    style={{
                      color: "Mediumslateblue",
                      transform: "translateX(430px) translateY(10px)",
                      fontSize: "30px",
                    }}
                    onClick={() => sendPost(post)}
                  ></i>
                </Col>
                <br />

                <Col>
                  <Text>
                    {showEdit ? (
                      <Form.Item>
                        <TextArea
                          rows={4}
                          value={editVal ? editVal : post.text}
                          onChange={(e) => setEditVal(e.target.value)}
                        />
                      </Form.Item>
                    ) : (
                      `${post.text} ${post.emoji}`
                    )}
                  </Text>
                </Col>
                <Col span='24'>
                  <Image src={"image2.png"} width='200' />
                </Col>
                <Col>
                  {like}{" "}
                  <HeartFilled className='purp-icon' onClick={handleLike} />
                  <MessageFilled
                    className='purp-icon'
                    onClick={handleComments}
                  />
                </Col>
                <Col style={{ marginTop: "20px" }}>
                  {/*============================================ КОММЕНТЫ ==========================================    */}
                  {showComments
                    ? comments
                    : `Напишите свой первый комментарий!`}
                </Col>
                <Col span={24} className='mt-3'>
                  <Form.Item>
                    <div>
                      <label htmlFor='name'>Your name:</label>
                      <input
                        id='name'
                        value={comDetails.name}
                        onChange={(e) =>
                          setComDetails({ ...comDetails, name: e.target.value })
                        }
                        className='form-control'
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
                    <Button
                        htmlType='submit'
                        type='primary'
                        style={{marginLeft: '5%'}}
                        onClick={() => deletePost(post.id)}
                      >
                        Delete Post
                      </Button>
                    <Form.Item />
                    <Form.Item>
                  
                      {/* <Button
                        htmlType='submit'
                        type='primary'
                      
                      >
                        Edit Post
                      </Button> */}
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
};

export default Post;
