import { Fragment } from "react";
import { ExampleComment } from "./ExampleComment";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

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

import React from "react";

const { TextArea } = Input;

const { Text } = Typography;

export default function Avatars() {
  return (
    <div>
      <Space>
        <Avatar size="large" icon={<UserOutlined />} />
      </Space>
    </div>
  );
}
