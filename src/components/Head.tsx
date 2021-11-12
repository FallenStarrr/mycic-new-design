import Avatars from "./Avatars";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import polygon from "../assets/polygon.png";
import {
  UserOutlined,
  DownOutlined,
  AudioOutlined,
  HeartOutlined,
  SmileOutlined,
  FolderOutlined,
  MoreOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import {
  Menu,
  Space,
  Avatar,
  Dropdown,
  Typography,
  Input,
  Button,
  Row,
  Col,
  Form,
} from "antd";
import "../styles/head.css";
import React, { FC, useState } from "react";
import { TextareaAutosize } from "@mui/material";
import Emoji from "./Emoji";
import message from "./send (2).png";
const { Text } = Typography;
const { TextArea } = Input;
const { Search } = Input;

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.antgroup.com'
      >
        Статистика ДА
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.aliyun.com'
      >
       Котировки
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.luohanacademy.com'
      >
       Галерея
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.luohanacademy.com'
      >
       Предстраховой осмотр
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.luohanacademy.com'
      >
       Уведомления
      </a>
    </Menu.Item>

    <Menu.Item>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.luohanacademy.com'
      >
       Выйти
      </a>
    </Menu.Item>
  </Menu>
);

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

interface headProps {
  edit: boolean;
  text: string;
  editedPost: string;
  showEdit: boolean;
  author: string;
  handleEdit: () => void;
  hideEdit: () => void;
  setText: (str: string) => void;
  addPost: () => void;
  deletePost: (id: number) => void;
  setAuthor: (author: string) => void;
  input: string;
  setInput: (input: string) => void;
}

let Head: FC<headProps> = ({
  edit,
  text,
  handleEdit,
  hideEdit,
  setText,
  addPost,
  deletePost,
  author,
  setAuthor,
  input,
  setInput,
}) => {
  let [showSmile, setShowSmile] = useState<boolean>(false);
  const addEmoji = (e: any) => {
    let sym = e.unified.split("-");
    let codesArray: any = [];
    sym.forEach((el: string) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setText(text + emoji);
  };
  return (
    <>
      <Menu
        style={{
         
          borderBottom: "2px solid black",
          paddingBottom: "4px",
        }}
        theme='light'
        mode='horizontal'
        className='nav justify-content-between'
      >
        <div className='d-flex left'>
          <Menu.Item key='1' className='nav__link'>
            О компании
          </Menu.Item>
          <Menu.Item key='2' className='nav__link'>
            Parse
          </Menu.Item>
          <Menu.Item key='3' className='nav__link'>
            Библиотека
          </Menu.Item>
          <Menu.Item key='4' className='nav__link'>
            Рейтинг
          </Menu.Item>
          <Menu.Item key='5' className='nav__link'>
            Шеф говорит
          </Menu.Item>
          <Menu.Item key='6' className='nav__link'>
            KPI
          </Menu.Item>
        </div>

        <div className='d-flex right'>
          <Menu.Item key='7' style={{ marginLeft: "60px" }}>
            <Space>
              <Avatars />
              <Text>Имя Фамилия</Text>
            </Space>
          </Menu.Item>
          <Menu.Item key='8'>
            <Dropdown overlay={menu}>
              <a
                className='ant-dropdown-link'
                onClick={(e) => e.preventDefault()}
              >
                <div
                  style={{
                    width: "48px",
                    background: "white",
                    borderRadius: "50%",
                    height: "48px",
                  }}
                  className='d-flex justify-content-center align-items-center mt-2'
                >
                  <img
                    src={polygon}
                    alt='polygon'
                    className='position-absolute d-block'
                  />
                </div>
              </a>
            </Dropdown>
          </Menu.Item>
        </div>
      </Menu>
      <div className={edit ? "overlay" : ""}>
        <section className={edit ? "feed  feed-edit" : "feed"}>
          <Row justify='space-between'>
            <Col span={2}>
              <Avatars />
            </Col>
            <Col span={14}>
              {edit ? (
                <>
                  <Form.Item>
                    <label htmlFor='user_name'>Имя:</label>
                    <Form.Item className='w-50' name='username'>
                      <Input
                        id='user_name'
                        value={author}
                        onChange={(e: any) => setAuthor(e.target.value)}
                      />
                    </Form.Item>
                    <label htmlFor='area'>Ваш пост:</label>
                    <TextArea
                      className=' w-75 border'
                      id='area'
                      rows={4}
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item>
                    {showSmile && (
                      <>
                        <Picker onSelect={addEmoji} theme='dark' />
                        <div className='mt-4'>
                          {/* <input type="text"
                                   value={input}
                                   onChange={e => setInput(e.target.value)}/> */}
                        </div>
                      </>
                    )}
                  </Form.Item>
                  <Form.Item>
                    <img
                      src={message}
                      width='50px'
                      height='50px'
                      alt='message icon'
                      onClick={addPost}
                    />
                    {/* <Button htmlType='submit' type='primary' >
                      Создать Пост
                    </Button> */}
                  </Form.Item>
                </>
              ) : (
                <>
                  <Text
                    style={{ color: "#C4C4C4", cursor: "pointer " }}
                    onClick={handleEdit}
                  >
                    Что у вас нового?
                  </Text>

                  {/* <Emoji  emoji="😊" onClick={e =>  {
                                    setSmiles(e.target.props.emoji) 
                                    console.log(smile)
                                }}/>
                                <Emoji emoji="😂"/>
                                <Emoji emoji="😅"/>
                                <Emoji emoji="😆"/>
                                <Emoji emoji="🥰"/>
                                <Emoji emoji="😶‍🌫️"/>
                                <Emoji emoji="😌"/> */}
                </>
              )}
            </Col>
            <Col
              span={7}
              style={{
                position: "relative",
                left: "10%",
              }}
            >
              <span style={{ fontSize: "30px" }}>
                <Space>
                  <span style={{ color: "Mediumslateblue" }}>
                    <i
                      className='far fa-smile-beam'
                      onClick={() => setShowSmile(!showSmile)}
                    ></i>
                  </span>

                  <span style={{ color: "Mediumslateblue" }}>
                    {" "}
                    <i className='far fa-image'></i>
                  </span>

                  <span style={{ color: "Mediumslateblue" }}>
                    <i className='far fa-folder'></i>
                  </span>
                  <span style={{ color: "Mediumslateblue" }}>
                    <i className='fas fa-ellipsis-h'></i>
                  </span>
                  {edit && (
                    <i
                      className='fas fa-times'
                      onClick={hideEdit}
                      style={{ color: "Mediumslateblue" }}
                    ></i>
                  )}
                </Space>
              </span>
            </Col>
          </Row>
        </section>
      </div>

      <section className='feed d-flex justify-content-between align-items-center'>
        <fieldset>
          <input
            type='search'
            placeholder='Поиск'
            style={{
              borderBottom: "2px solid black",
              width: "309px",
              height: "22px",
            }}
          />
          <i className='fab fa-searchengin'></i>
        </fieldset>

        <Button
          type='primary'
          className='btn'
          icon={<DownOutlined />}
          size='small'
        >
          Новости
        </Button>
        <Button
          type='primary'
          className='btn'
          icon={<DownOutlined />}
          size='small'
        >
          Сортировка
        </Button>
        <Button
          type='primary'
          className='btn'
          icon={<HeartOutlined />}
          size='small'
        >
          Понравилось
        </Button>
      </section>
    </>
  );
};

export default Head;
