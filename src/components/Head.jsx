import Avatars from "./Avatars";
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
import { useState } from "react";
import { TextareaAutosize } from "@mui/material";

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
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.aliyun.com'
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.luohanacademy.com'
      >
        3rd menu item{" "}
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

export default function Head({
  edit,
  text,
  handleEdit,
  setText,
  addPost,
  deletePost,
  author,
  setAuthor
}) {
  return (
    <>
      <Menu
        style={{ background: "#F6F6F9" }}
        theme='light'
        mode='horizontal'
        className='nav justify-content-between'
      >
        <div className='d-flex left'>
          <Menu.Item key='1' className='nav__link'>
            О компани
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
                  className='d-flex justify-content-center align-items-center'
                >
                  <img
                    src={polygon}
                    alt='polygon'
                    class='position-absolute d-block'
                  />
                </div>
              </a>
            </Dropdown>
          </Menu.Item>
        </div>
      </Menu>

      <section className={edit ? "feed  feed-edit" : "feed"}>
        <Row justify='space-between'>
          <Col span={2}>
            <Avatars />
          </Col>
          <Col span={14}>
            {edit ? (
              <>
                <Form.Item>
                  <Form.Item
                    class="w-50"
                    label="Имя"
                    name='username'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <label htmlFor="area">Ваш пост:</label>
                  <TextArea
                   rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      }]}
                   class="w-75 border"
                   id="area"
                   label='Your post'
                    rows={4}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </Form.Item>
                <Form.Item>
                  <Button htmlType='submit' type='primary' onClick={addPost}>
                    Add Comment
                  </Button>
                </Form.Item>
              </>
            ) : (
              <Text style={{ color: "#C4C4C4" }}>Что у вас нового?</Text>
            )}
          </Col>
          <Col span={7}
          style={{
              position: 'relative',
              left: '10%'
          }}
          >
            <span style={{ fontSize: "30px" }}>
              <Space>
                <i class='far fa-smile-beam'></i>
                <i class='far fa-image'></i>
                <i class='far fa-folder'></i>
                <i class='fas fa-ellipsis-h' onClick={handleEdit}></i>
              </Space>
            </span>
          </Col>
        </Row>
      </section>

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
          <i class='fab fa-searchengin'></i>
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
}
