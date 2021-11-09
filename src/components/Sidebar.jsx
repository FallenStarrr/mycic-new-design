import {
  UserOutlined,
  TeamOutlined,
  CheckSquareOutlined,
  BookOutlined,
  MailOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Layout, Typography, Menu, Col, Row, Space } from "antd";

const { Title } = Typography;

export default function Sidebar() {
  return (
    <Menu className='nav'>
      <Title level={2} style={{ color: "#0057FF", paddingLeft: "50px" }}>
        My.cic.kz
      </Title>
      <Menu.Item className='nav__item' key='0'>
        <Link to='/test_rest'>
          <Space>
            <UserOutlined className='purp-icon' />
            TEST_REST
          </Space>
        </Link>
      </Menu.Item>
      <Menu.Item className='nav__item' key='1'>
        <Link to='/aboutme'>
          <Space>
            <UserOutlined className='purp-icon' />
            Обо мне
          </Space>
        </Link>
      </Menu.Item>
      <Menu.Item className='nav__item' key='2'>
        <Link to='/news'>
          <Space>
            <MailOutlined className='purp-icon' />
            Новости
          </Space>
        </Link>
      </Menu.Item>
      <Menu.Item className='nav__item' key='3'>
        <Link to='/colleagues'>
          <Space>
            <TeamOutlined className='purp-icon' />
            Коллеги
          </Space>
        </Link>
      </Menu.Item>
      <Menu.Item className='nav__item' key='4'>
        <Link to='/agree'>
          <Space>
            <CheckSquareOutlined className='purp-icon' /> Согласование
          </Space>
        </Link>
      </Menu.Item>
      <Menu.Item className='nav__item ' key='5'>
        <Link to='/studycenter'>
          <BookOutlined className='purp-icon purp-icon-move' />
          Центр знаний
        </Link>
      </Menu.Item>
      <Menu.Item className='nav__item' key='6'>
        <Link to='/talks'>
          <Space>
            <EyeOutlined className='purp-icon' />
            На переговоры
          </Space>
        </Link>
      </Menu.Item>
    </Menu>
  );
}
