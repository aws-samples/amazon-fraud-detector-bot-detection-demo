import React from "react";
// import ReactDOM from "react-dom";
import {
  Button,
  Layout,
  Typography,
  Row,
  Col,
  Form,
  Input,
  notification,
  Modal,
} from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
// import Stats from './Stats';
import gaming from "../assets/gaming.jpg";
import "antd/dist/antd.css";
import "../App.less";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const { Content } = Layout;
const { Title, Text } = Typography;

var dt2;
var reg_time;

const addressMap = {
  "joelegit@example.com": "203.0.113.0",
  "janelegit@example.com": "203.0.113.1",
  "mchammer2legit2quit@example.com": "203.0.113.2",
  "jorgesouza@example.net": "203.0.113.3",
  "marymajor@example.net": "203.0.113.4",
  "middleman@example.net": "203.0.113.5",
  "freddiefraudster@example.com": "203.0.113.6",
};

class Register extends React.Component {
  state = {
    loading: false,
    apiError: false,
    ip: null,
    userAgent: null,
    fdoutcome: null,
    fdscore: null,

    visible: false,
  };

  componentDidMount() {
    notification.destroy();
  }

  componentWillMount() {
    var dt = new Date();
    cookies.set("vtime", dt, { path: "/" });

    this.getStats();
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  getStats = async () => {
    try {
      let res = await axios.get("https://www.cloudflare.com/cdn-cgi/trace");
      let data = res.data.replace(/[\r\n]+/g, '","').replace(/=+/g, '":"');
      data = '{"' + data.slice(0, data.lastIndexOf('","')) + '"}';
      const jsondata = JSON.parse(data);
      this.setState({ ip: jsondata.ip, userAgent: jsondata.uag });
    } catch (err) {
      console.log(err);
    }
  };

  getPrediction = async (values) => {
    try {
      //   // {header: {x-api-key:< api_key>}}
      //   //https://drv4zh6s22.execute-api.us-east-1.amazonaws.com/sample/detect
      //   // let res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
      const email = values.email.toLowerCase();
      const ip = addressMap[email] || this.state.ip;
      reg_time = Math.abs(dt2 - Date.parse(cookies.get("vtime")));

      let res = await axios.get(
        "https://zkrwp6hul3.execute-api.eu-west-1.amazonaws.com/prod",
        {
          params: {
            email_address: email,
            ip_address: ip,
            registration_time: reg_time,
          },
        }
      );

      this.setState(
        {
          loading: false,
          fdoutcome: res.data.body.outcomes[0],
          fdscore: res.data.body.score,
        },
        () => {
          this.openNotificationWithIcon(values, ip);
        }
      );

      // this.openNotificationWithIcon(values);
      console.log('Response - ', res.data.body);
      if (res.data.body.outcomes[0] === 'review') {
        this.props.history.push('/error');
      } else if (res.data.body.outcomes[0] === 'deny') {
        this.props.history.push('/error');

      } else {
        this.props.history.push("/success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  onFinish = (values) => {
    // console.log('Success:', values);
    this.setState({ loading: true });
    // this.props.history.push("/success");
    // this.props.history.push("/confirm");
    dt2 = new Date();
    this.getPrediction(values);
  };

  openNotificationWithError = () => {
    notification.error({
      message: "Error",
      description: (
        <>
          <Text>Please contact the system administrator</Text>
          <br />
        </>
      ),
      placement: "bottomLeft",
      duration: 0,
      className: "notifClass",
    });
  };

  openNotificationWithIcon = (data, ip) => {
    notification.info({
      message: "Data Submitted",
      description: (
        <>
          <Text>Email: {data.email}</Text>
          <br />
          <Text>
            IP: <Text code>{ip}</Text>
          </Text>
          <br />
          <Text>
            AFD Score: <Text code>{this.state.fdscore}</Text>
          </Text>
          <br />
          <Text>
            AFD Outcome: <Text code>{this.state.fdoutcome}</Text>
          </Text>
          <br />
          <Text>
            Registration Time: <Text code>{reg_time}</Text>
          </Text>
          <br />
        </>
      ),
      placement: "bottomLeft",
      duration: 0,
      className: "notifClass",
    });
  };

  render() {
    return (
      <>
        <Content style={{ padding: "50px", height: "100vh" }}>
          <div className="site-layout-content">
            <Row>
              <Col
                span={12}
                style={{
                  backgroundImage: `url(${gaming})`,
                  backgroundSize: "auto",
                  backgroundRepeat: "no-repeat",
                  height: "700px",
                }}
              ></Col>
              <Col span={12}>
                <div className="formBox">
                  <Title level={1} style={{ color: "#546E7A" }}>
                    A new way to game!
                  </Title>
                  <Title level={3} style={{ color: "#546E7A" }}>
                    Create an account
                  </Title>
                  <Form
                    // {...layout}
                    hideRequiredMark={true}
                    layout="vertical"
                    name="basic"
                    size="large"
                    // initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    // onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      // label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                      help="Letters, digits, and @,_ only "
                    >
                      <Input
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                      />
                    </Form.Item>

                    <Form.Item
                      // label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                      style={{ marginTop: "10px" }}
                    >
                      <Input.Password
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Password"
                      />
                    </Form.Item>

                    <Form.Item
                      // label="Email address"
                      name="email"
                      rules={[
                        { required: true, message: "Please enter your email!" },
                        { type: "email", message: "Invalid email" },
                      ]}
                    >
                      <Input
                        prefix={
                          <MailOutlined className="site-form-item-icon" />
                        }
                        placeholder="Email address"
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        loading={this.state.loading}
                      >
                        REGISTER
                      </Button>

                      {/* <Button onClick={this.printName}>Hello</Button> */}
                      <div className="sign-in">
                        Already have an account?{" "}
                        <Link to="/signin"> Sign-in </Link>
                      </div>
                    </Form.Item>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
          {/* <Stats/> */}
          <br />

          <Modal
            title="Test Data"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>
              <Text style={{ color: "red" }}>
                For username and password, use any value.
              </Text>
            </p>
            <p>
              <Text style={{ color: "blue" }}>
                Email Addresses for <b>"Approved"</b> outcome:
              </Text>{" "}
              <b>
                joelegit@example.com, janelegit@example.com,
                mchammer2legit2quit@example.com{" "}
              </b>
            </p>
            <p>
              <Text style={{ color: "blue" }}>
                Email Addreses for <b>"Review"</b> outcome:
              </Text>{" "}
              <b>
                jorgesouza@example.net, marymajor@example.net,
                middleman@example.net
              </b>
            </p>
            <p>
              <Text style={{ color: "blue" }}>
                Email Address for <b>"Deny"</b> outcome:
              </Text>{" "}
              <b>freddiefraudster@example.com</b>
            </p>
          </Modal>
        </Content>
      </>
    );
  }
}

export default withRouter(Register);
