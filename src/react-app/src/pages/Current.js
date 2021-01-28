import React from 'react';
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
  Alert
} from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link, withRouter } from 'react-router-dom';
import Captcha from './Recaptcha';
import 'antd/dist/antd.css';
import '../App.less';

const { Content } = Layout;
const { Title, Text } = Typography;

class Current extends React.Component {
  state = {
    loading: false,
    apiError: false,
    ip: null,
    userAgent: null,
    fdoutcome: null,
    fdscore: null,
    captchaVisible: false,
    captchaError: true
  };

  componentDidMount() {
    notification.destroy();
  }

  onFinish = values => {
    // console.log('Success:', values);
    // this.setState({ loading: true, captchaVisible: true });
    this.props.history.push('/success');
    // this.props.history.push("/confirm");
    // this.getPrediction(values);
  };

  onCaptchaDone = result => {
    if (result) {
      this.props.history.push('/success');
    } else {
      console.log(result);
      this.setState({ captchaError: result, captchaVisible: false }, () =>
        console.log(this.state)
      );
    }
  };

  openNotificationWithError = () => {
    notification.error({
      message: 'Error',
      description: (
        <>
          <Text>Please contact the system administrator</Text>
          <br />
        </>
      ),
      placement: 'bottomLeft',
      duration: 0,
      className: 'notifClass'
    });
  };

  openNotificationWithIcon = (data, ip) => {
    notification.info({
      message: 'Data Submitted',
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
        </>
      ),
      placement: 'bottomLeft',
      duration: 0,
      className: 'notifClass'
    });
  };

  render() {
    return (
      <>
        <Content style={{ padding: '50px', height: '100vh' }}>
          <Captcha
            isVisible={this.state.captchaVisible}
            captchaDone={this.onCaptchaDone}
          />
          <div className="current-site-layout-content">
            <Row justify="center">
              <Col span={18}>
                <div className="formBox">
                  <Title level={1} style={{ color: '#546E7A' }}>
                    A new way to game.
                  </Title>
                  <Title level={3} style={{ color: '#546E7A' }}>
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
                          message: 'Please input your username!'
                        }
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
                          message: 'Please input your password!'
                        }
                      ]}
                      style={{ marginTop: '10px' }}
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
                        { required: true, message: 'Please enter your email!' },
                        { type: 'email', message: 'Invalid email' }
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
                      >
                        REGISTER
                      </Button>

                      {/* <Button onClick={this.printName}>Hello</Button> */}
                      <div className="sign-in">
                        Already have an account?{' '}
                        <Link to="/signin"> Sign-in </Link>
                      </div>
                    </Form.Item>
                  </Form>
                  {!this.state.captchaError ? (
                    <Alert
                      message="Invalid Captcha Verification. Please try again."
                      type="error"
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </Col>
            </Row>
          </div>
          {/* <Stats/> */}
        </Content>
      </>
    );
  }
}

export default withRouter(Current);
