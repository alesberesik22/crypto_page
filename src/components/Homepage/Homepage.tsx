import React from "react";
import "./Homepage.scss";
import millify from "millify";
import { Typography, Row, Statistic, Col, Spin } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptoQuery } from "../services/Cryptoapi";
import Cryptocurrencies from "../Cryptocurrencies/Cryptocurrencies";
import News from "../News/News";

const { Title } = Typography;

function Homepage() {
  const { data, isFetching } = useGetCryptoQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching === true) {
    return (
      <div className="loader">
        {" "}
        <Spin />
      </div>
    );
  }
  return (
    <div className="page">
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap:"
            value={`$${millify(globalStats.totalMarketCap)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={`$${millify(globalStats.total24hVolume)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home_heading_container">
        <Row className="heading_cryptoCurrencies">
          <Col>
            <Title level={2} className="home_title">
              Top 10 Cryptocurrencies in the world
            </Title>
          </Col>
          <Col>
            <Title level={3} className="home_showMore">
              <Link to={"/cryptocurrencies"}>Show More</Link>
            </Title>
          </Col>
        </Row>
        <Cryptocurrencies simplified={true} />
      </div>
      <div className="home_heading_container">
        <Row className="heading_cryptoCurrencies">
          <Col>
            <Title level={2} className="home_title">
              Latest Crypto News
            </Title>
          </Col>
          <Col>
            <Title level={3} className="home_showMore">
              <Link to={"/news"}>Show More</Link>
            </Title>
          </Col>
        </Row>
        <News simplified={true} />
      </div>
    </div>
  );
}

export default Homepage;
