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
  Select,
  Alert,
} from "antd";
import { LockOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
// import axios from 'axios';
// import captcha from '../assets/captcha.png';
import gaming from "../assets/gaming.jpg";
import "antd/dist/antd.css";
import "../App.less";

const { Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;
const _CAPTCHA = "wvphnh";

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }} defaultValue="1">
      <Option value="1">+1</Option>
      <Option value="52">+52</Option>
      <Option value="44">+44</Option>
      <Option value="34">+34</Option>
      <Option value="91">+91</Option>
    </Select>
  </Form.Item>
);

class Confirmation extends React.Component {
  state = {
    codeSent: false,
    loading: false,
    otp: null,
    incorrectOTP: false,
  };

  onFinish = (values) => {
    console.log("Success:", values);
    const val = Math.floor(1000 + Math.random() * 9000);
    // this.openNotificationWithIcon(values);
    this.setState({ codeSent: true, loading: true });
    setTimeout(() => {
      this.setState({ otp: val });
      this.openNotificationWithIcon();
    }, 5000);
    // this.props.history.push("/success");
  };

  openNotificationWithIcon = () => {
    this.setState({ loading: false });
    notification.info({
      message: "Your OTP is here",
      description: `OTP: ${this.state.otp}`,
      placement: "bottomRight",
      duration: 0,
      className: "notifClass",
    });
  };

  onSubmitOTP = (value) => {
    const otpVal = parseInt(
      `${value.otp1}${value.otp2}${value.otp3}${value.otp4}`,
      10
    );
    if (otpVal !== this.state.otp) {
      console.log("OTP=", otpVal);
      this.setState({ incorrectOTP: true });
    } else {
      notification.destroy();
      this.props.history.push("/success");
    }
  };

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
                  Confirm your identity
                </Title>
                <Text>
                  Before you can use your account, you must verify your phone
                  number
                </Text>
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
                    label="Phone Number"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Phone number",
                      },
                    ]}
                    // help="Letters, digits, and @,_ only "
                  >
                    <Input
                      addonBefore={prefixSelector}
                      placeholder="XXX-XXX-XXXX"
                      disabled={this.state.codeSent}
                    />
                  </Form.Item>

                  {/* <img
                    src={captcha}
                    alt="captcha"
                    style={{ marginBottom: '10px' }}
                  /> */}
                  <Form.Item
                    label="Enter text as shown above"
                    name="secCheck"
                    rules={[
                      {
                        required: true,
                        message: "Please enter the characters as shown above",
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (value && value === _CAPTCHA) {
                            return Promise.resolve();
                          }
                          return Promise.reject("Secure captcha text mismatch");
                        },
                      }),
                    ]}
                    // style={{marginTop: '10px'}}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Secure Captcha"
                      disabled={this.state.codeSent}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      loading={this.state.loading}
                    >
                      {this.state.loading ? `SENDING SMS` : `SEND SMS`}
                    </Button>
                  </Form.Item>
                </Form>
                {this.state.otp && (
                  <div style={{ textAlign: "center" }}>
                    <Row justify="center">
                      <Col>
                        <Text>Enter OTP</Text>
                        <Form
                          layout="inline"
                          style={{ width: "100%" }}
                          onFinish={this.onSubmitOTP}
                        >
                          <Form.Item
                            name="otp1"
                            rules={[{ required: true, message: " " }]}
                          >
                            <Input placeholder="0" style={{ width: "35px" }} />
                          </Form.Item>
                          <Form.Item
                            name="otp2"
                            rules={[{ required: true, message: " " }]}
                          >
                            <Input placeholder="0" style={{ width: "35px" }} />
                          </Form.Item>
                          <Form.Item
                            name="otp3"
                            rules={[{ required: true, message: " " }]}
                          >
                            <Input placeholder="0" style={{ width: "35px" }} />
                          </Form.Item>
                          <Form.Item
                            name="otp4"
                            rules={[{ required: true, message: " " }]}
                          >
                            <Input placeholder="0" style={{ width: "35px" }} />
                          </Form.Item>
                          <Form.Item>
                            <Button
                              type="primary"
                              htmlType="submit"
                              className="login-form-button"
                            >
                              SUBMIT
                            </Button>
                          </Form.Item>
                        </Form>
                        {this.state.incorrectOTP && (
                          <Alert
                            message="Invalid OTP was entered"
                            type="error"
                            style={{ marginTop: "10px" }}
                          />
                        )}
                      </Col>
                    </Row>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </Content>
    );
  }
}

export default withRouter(Confirmation);
