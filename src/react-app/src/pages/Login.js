import React from "react";
// import ReactDOM from "react-dom";
import { Button, Layout, Typography, Row, Col, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import gaming from "../assets/gaming.jpg";

import "antd/dist/antd.css";
import "../App.less";

const { Content } = Layout;
const { Title } = Typography;

class Login extends React.Component {
  render() {
    return (
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
                  Log-in to your account
                </Title>
                <Form
                  // {...layout}
                  hideRequiredMark={true}
                  layout="vertical"
                  name="basic"
                  size="large"
                  // initialValues={{ remember: true }}
                  // onFinish={onFinish}
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
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
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
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Password"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      LOG IN
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
    );
  }
}

export default Login;
