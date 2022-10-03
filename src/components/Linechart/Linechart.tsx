import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import "./Linechart.scss";
import {
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

function Linechart(props: any) {
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  );
  const { Title } = Typography;
  const coinPrice: any = [];
  const coinStamp: any = [];
  props.history?.data?.history.map((item: any) => {
    coinPrice.push(item.price);
    coinStamp.push(new Date(item.timestamp).toLocaleString());
  });

  const data = {
    labels: coinStamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return (
    <>
      <Row className="chart_header">
        <Title level={2} className="chart_title">
          {props.coinName} Price Chart
        </Title>
        <Col className="price_cointainer">
          <Title level={5} className="price_change">
            {props.history?.data?.change}%
          </Title>
          <Title level={5} className="current_price">
            Current {props.coinName} Price $ {props.currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
}

export default Linechart;
