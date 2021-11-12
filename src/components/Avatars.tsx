import { UserOutlined } from "@ant-design/icons";

import { Space, Avatar } from "antd";
import "antd/dist/antd.css";
import "../styles/post.css";

export default function Avatars() {
  return (
    <div>
      <Space>
        <Avatar size='large' icon={<UserOutlined />} />
      </Space>
    </div>
  );
}
