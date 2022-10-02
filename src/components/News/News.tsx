import React, { useState } from "react";
import "./News.scss";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetNewsQuery } from "../services/CryptoNewsApi";
import { useGetCryptoQuery } from "../services/Cryptoapi";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

function News(props: any) {
  const [category, setCategory] = useState("Cryptocurrency");
  const { data: cryptoNews, isFetching } = useGetNewsQuery({
    newsCategory: category,
    count: props.simplified ? 6 : 12,
  });
  const { data: cryptoCategory } = useGetCryptoQuery(100);

  if (isFetching) {
    return <div>Loading</div>;
  }
  return (
    <div className="page">
      <Row gutter={[24, 24]}>
        {!props.simplified && (
          <Col span={24}>
            <Select
              style={{ width: "200px" }}
              showSearch
              className="select_news"
              placeholder="Select a crypto category"
              optionFilterProp="children"
              onChange={(e) => {
                console.log(e);
                setCategory(e);
              }}
              filterOption={(input, option) =>
                option!.children
                  ?.toString()
                  .toLowerCase()
                  .indexOf(input.toLowerCase())! >= 0
              }
            >
              <Option value="Cryptocurency">Cryptocurrency</Option>
              {cryptoCategory?.data?.coins.map((cat: any, index: number) => (
                <Option value={cat.name} key={index}>
                  {cat.name}
                </Option>
              ))}
            </Select>
          </Col>
        )}
        {cryptoNews.value.map((news: any, index: any) => (
          <Col xs={24} sm={12} lg={8} key={index} className="card">
            <Card hoverable className="news_card">
              <a
                href={news.url}
                target="_blank"
                rel={"noreferrer"}
                className="card_description"
              >
                <div className="news_image_container">
                  <Title className="news_title" level={4}>
                    {news.name}
                  </Title>
                  <img
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt="news"
                  />
                </div>
                <p>
                  {news.description > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
                <div className="provider_container">
                  <div>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                      alt=""
                    />
                    <Text className="provider_name">
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                  <Text>
                    {moment(news.datePublished).startOf("second").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default News;
