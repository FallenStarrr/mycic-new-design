import { Fragment } from "react";
import React from "react";
import { UserOutlined, DownOutlined, EyeOutlined } from "@ant-design/icons";
import '../styles/about-me.css'
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
  Divider,
  Collapse,
  Table,
  Tag,
  Steps,
  DatePicker,
} from "antd";
import "antd/dist/antd.css";
import "../styles/post.css";

interface R {
  lastName: string;
}

const { Column, ColumnGroup } = Table;
const { Step } = Steps;
const { TextArea } = Input;
const { Panel } = Collapse;

const { Text, Title } = Typography;



export function Aboutme() {
  return (
    <div>
      <section>
        <div className="container">
          <Row justify="center">
            <Col sm={24} xs={24}>
              <Image src="image 4.png" />
            </Col>

            <Col sm={24} xs={24}>
              <section className="white-section">
                <Title>Алексей Щербаков</Title>
                <Text>Бухгалтер</Text>
                <Row>
                  <Col sm={24} xs={24}>День рождения:</Col>
                  <Col sm={24} xs={24}>
                    <strong>15 декабря</strong>{" "}
                  </Col>
                  <Col sm={24} xs={24}>Образование:</Col>
                  <Col sm={24} xs={24}>
                    <strong>МГУ</strong>{" "}
                  </Col>
                  <Col sm={24}>Город:</Col>
                  <Col sm={24} xs={24}>
                    <strong>Москва</strong>
                  </Col>
                </Row>
              </section>
            </Col>
          </Row>
        </div>
      </section>

      <section
        className="white-section white-section-1"
        style={{ marginRight: "490px" }}
      >
        <Row justify="space-around">
          <Col sm={24} md={8} xs={24}>
          
            <Title title="3">Досье</Title>{" "}
          </Col>
          <Col  sm={24}   md={8}  xs={24}>
           
            <Title title="3"> Мои результаты</Title>{" "}
          </Col>
          <Col  sm={24} md={8}  xs={24}>
           
            <Title title="3"> Сенткоины</Title>
          </Col>
        </Row>
        <Divider />
        
     </section>


{/*      
     <div>
     <Collapse defaultActiveKey={["1"]} style={{ width: '975px', margin: 'auto', position: 'relative', right: '206px', marginTop: '25px'}}>
          <Panel header="Кадровое перемещение" key="1">
            <Steps direction="vertical" size="small" current={1}>
              <Step title="Finished" description="This is a description." />
              <Step title="In Progress" description="This is a description." />
              <Step title="Waiting" description="This is a description." />
            </Steps>
          </Panel>
        </Collapse>
      
     
        <Collapse  style={{ width: '975px', margin: 'auto', position: 'relative', right: '206px',marginTop: '25px'}}>
          <Panel header="Административные дни" key="1">
            <Steps direction="vertical" size="small" current={1}>
              <Step title="Finished" description="This is a description." />
              <Step title="In Progress" description="This is a description." />
              <Step title="Waiting" description="This is a description." />
            </Steps>
          </Panel>
        </Collapse>
     

   
        <Collapse  style={{ width: '975px', margin: 'auto', position: 'relative', right: '206px', marginTop: '25px'}}>
          <Panel header="Больничные дни" key="1">
            <Steps direction="vertical" size="small" current={1}>
              <Step title="Finished" description="This is a description." />
              <Step title="In Progress" description="This is a description." />
              <Step title="Waiting" description="This is a description." />
            </Steps>
          </Panel>
        </Collapse>
     

      
        <Collapse style={{ width: '975px', margin: 'auto', position: 'relative', right: '206px', marginTop: '25px' }}>
          <Panel header="Отпуск" key="1">
            <Steps direction="vertical" size="small" current={1}>
              <Step title="Finished" description="This is a description." />
              <Step title="In Progress" description="This is a description." />
              <Step title="Waiting" description="This is a description." />
            </Steps>
          </Panel>
        </Collapse>
    
        </div> */}

  

        
      {/***********************************  Card  ************************************ */}

      <Row gutter={26} className="white-section-2">
        
        <Col sm={24} xs={24}>


          <section className="white-section white-section-2-card-small card">



            <Image src="image 5.png"></Image>
            <div className="card__container">
              <div style={{ display: "flex", flexDirection: "column", width: '100%' }}>
                <div className="subflex-card">
                  <span className="card__digits">30</span>
                  <img src="fes.png" alt="C" />
                </div>
                <div>
                  <img src="chip.png" alt="" />
                </div>
              </div>
              <div>
                <img src="centras.png" alt="" />
                <img src="insu.png" alt="" />
              </div>
            </div>
            <div style={{marginTop: '20px'}}>
            <h5>Потратить Сенткоины</h5>
            <Space><Button style={{borderColor: '#7449EF', color: '#7449EF', boxShadow: '0px 4px 3px 1px rgba(0, 0, 0, 0.03)', borderRadius: '5px'}}>Отправить</Button>
            <Input  placeholder="Выберите товар" />
            </Space>
           
            </div>
            

          </section>

          <section
            className="white-section white-section-2-card-small"
            style={{ height: "284px" }}
          >
            <Space>
              <DatePicker />
              <DatePicker />
            </Space>
            <br />
            <Divider />
            <Button className="show-btn">
              <EyeOutlined /> Показать
            </Button>
          </section>
        </Col>

        <Col sm={24} xs={24}>
          <section
            className="white-section white-section-2-card "
            
          >
            <table style={{  }}>
              <thead>
                <tr>
                  <th>№</th>
                  <th>Вид</th>
                  <th>Описание</th>
                  <th>Количество</th>
                  <th>Итого</th>
                </tr>
              </thead>

              <tbody>
                <tr className="gray-row">
                  <td>256</td>
                  <td>Поступление</td>
                  <td>
                    Организационная группа Kazakhstan Marketing Conference
                  </td>
                  <td>5</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>256</td>
                  <td>Поступление</td>
                  <td>
                    Организационная группа Kazakhstan Marketing Conference
                  </td>
                  <td>5</td>
                  <td>5</td>
                </tr>
                <tr className="gray-row">
                  <td>256</td>
                  <td>Поступление</td>
                  <td>
                    Организационная группа Kazakhstan Marketing Conference
                  </td>
                  <td>5</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>256</td>
                  <td>Поступление</td>
                  <td>
                    Организационная группа Kazakhstan Marketing Conference
                  </td>
                  <td>5</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>

            <Button
             className="btn"
            >
              Потратить Сенткоины
            </Button>
          </section>
        </Col>
      </Row>
    </div>
  );
}
