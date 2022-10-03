import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Row, Col, Input, Card } from "antd";
import "./Cryptocurrencies.scss";
import { useGetCryptoQuery } from "../services/Cryptoapi";

function Cryptocurrencies(props: any) {
  const count = props.simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptoQuery(count);
  const [crypto, setCrypto] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin: any) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCrypto(filteredData);
  }, [cryptosList, searchTerm]);

  useEffect(() => {
    setCrypto(cryptosList?.data?.coins);
  }, [isFetching]);

  if (isFetching) {
    return <div>Loading</div>;
  }

  return (
    <div className="page">
      {!props.simplified && (
        <div className="search_crypto">
          <Input
            placeholder="Search Crypto Currency"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto_card_container">
        {crypto?.map((currency: any) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto_card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto_image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Detail Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cryptocurrencies;
