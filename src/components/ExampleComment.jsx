import { Fragment } from "react";

import {
  UserOutlined,
  DownOutlined,
  PropertySafetyFilled,
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
  Button,
} from "antd";
import "antd/dist/antd.css";

export const ExampleComment = ({
  name,
  children,
  text,
  id,
  comment,
  setComment,
}) => {
  let showComments1 = true
  function deleteCom(id) {
    setComment(comment.filter((post) => post.id !== id));
  }
  return (
    <>
    
      <Comment
        actions={[<span key='comment-nested-reply-to'>Reply to</span>]}
        author={<a>{name ? name : "Han Solo"}</a>}
        avatar={
          <Avatar
            src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            alt='Han Solo'
          />
        }
        content={
          text ? (
            text
           
            
          ) : (
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure).
            </p>
          )
        }
      >
       <Button
        htmlType='submit'
        type='danger'
      
        onClick={() => deleteCom(id)}
      >
        Delete Comment
      </Button>
        {children}
      </Comment>
     
      {/* <Button htmlType='submit' type='primary' onClick={editCom}>
                                  Edit Post
                    </Button> */}
    </>
  );
};
