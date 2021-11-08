import Avatars from "./Avatars";
import polygon from '../assets/polygon.png'
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
} from "antd";
import "../styles/head.css";

const {Text} = Typography;

const {Search} = Input;


const menu = (
    <Menu>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            >
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
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


export default function Head() {
    return (
        <>
            <Menu
                style={{background: '#F6F6F9'}}
                theme="light"
                mode="horizontal"
                className="nav justify-content-between"
                
            >
            <div className="d-flex left">
                <Menu.Item key="1" className="nav__link">О компани</Menu.Item>
                <Menu.Item key="2" className="nav__link">Parse</Menu.Item>
                <Menu.Item key="3" className="nav__link">Библиотека</Menu.Item>
                <Menu.Item key="4" className="nav__link">Рейтинг</Menu.Item>
                <Menu.Item key="5" className="nav__link">Шеф говорит</Menu.Item>
                <Menu.Item key="6" className="nav__link">KPI</Menu.Item>
                </div>


    <div className="d-flex right">
                <Menu.Item key="7" style={{marginLeft: "60px"}}>
                    <Space>
                        <Avatars/>
                        <Text>Имя Фамилия</Text>
                    </Space>
                </Menu.Item>
                <Menu.Item key="8">
                    <Dropdown 
                    overlay={menu}
                    >
                        <a
                            className="ant-dropdown-link"
                            onClick={(e) => e.preventDefault()}
                        >
                        <div 
                        style={{
                        width: '48px', 
                        background: 'white', 
                        borderRadius: '50%', 
                        height: '48px'}}
                        className="d-flex justify-content-center align-items-center"
                        >
                                            <img 
                            src={polygon} 
                            alt="polygon"  
                            class="position-absolute d-block"
                                            />
                                        </div>
                                        </a>
                                 </Dropdown>
                </Menu.Item>
   </div>
            </Menu>

            <section className="feed">
                <Row justify="start">
                    <Col span={4}>
                        <Avatars/>
                    </Col>
                    <Col span={8}>
                        <Text>Что у вас нового?</Text>
                    </Col>
                    <Col>
                        <Space>
                            <SmileOutlined className="big-icon"/>
                            <FolderOutlined className="big-icon"/>
                            <MoreOutlined className="big-icon"/>
                            <PictureOutlined className="big-icon"/>
                        </Space>
                    </Col>
                </Row>
            </section>

            <section className="feed">
                <Space>
                    <Search
                        size="large"
                        style={{width: '400px'}}
                        rounded
                        placeholder="Поиск"
                        enterButton
                        className="search-inp"
                    />

                    <Button
                        type="primary"
                        className="btn"
                        icon={<DownOutlined/>}
                        size="small"
                    >
                        Новости
                    </Button>
                    <Button
                        type="primary"
                        className="btn"
                        icon={<DownOutlined/>}
                        size="small"
                    >
                        {" "}
                        Сортировка
                    </Button>
                    <Button
                        type="primary"
                        className="btn"
                        icon={<HeartOutlined/>}
                        size="small"
                    >
                        {" "}
                        Понравилось
                    </Button>
                </Space>
            </section>
        </>
    );
}
