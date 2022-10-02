import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import "./Linechart.scss";

function Linechart(props: any) {
  const { Title } = Typography;
  console.log(props.coinHistory);
  return (
    <>
      <Row className="chart_header">
        <Title level={2} className="chart_title">
          {props.coinName} Price Chart
        </Title>
        <Col className="price_cointainer">
          <Title level={5} className="price_change">
            {props.coinHistory?.data?.change}
          </Title>
        </Col>
      </Row>
    </>
  );
}

export default Linechart;
