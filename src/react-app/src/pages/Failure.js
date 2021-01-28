import React from "react";
// import ReactDOM from "react-dom";
import { Layout, Row, Col, Result, Typography } from "antd";
import gaming from "../assets/gaming.jpg";
import "antd/dist/antd.css";
import "../App.less";

const { Content } = Layout;
const { Text } = Typography;

class Error extends React.Component {
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
                <Result
                  status="error"
                  title="Unable to complete registration!"
                  subTitle={
                    <Text strong>
                      We are unable to verify your identity at this time.
                    </Text>
                  }
                />
              </div>
            </Col>
          </Row>
        </div>
      </Content>
    );
  }
}

export default Error;
