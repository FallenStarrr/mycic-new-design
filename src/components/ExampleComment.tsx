import { Fragment, FC } from "react";

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

interface IComment {
  name: string
  text: string
  emoji?: string
  id: number
}


interface IComments {
  name: string
  text: string
  emoji?: string
  id: number
  reply?: IComment[]
  comment: IComment[]
  setComment: (comment: IComment[]) => void
}

export const ExampleComment:FC<IComments> = ({
  name,
  children,
  text,
  id,
  comment,
  setComment,
}) => {

  function deleteCom(id:number ) {
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
        type='dashed'
      
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
