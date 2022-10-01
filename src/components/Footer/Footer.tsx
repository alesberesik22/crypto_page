import React from "react";
import { Space, Typography } from "antd";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Typography.Title
        level={5}
        className="title"
        style={{ color: "white", textAlign: "center" }}
      >
        Copyright © 2022 Ales Beresik
        <Space className="cryptoverse">
          <Link to="/">Cryptoverse</Link> <br />
        </Space>
      </Typography.Title>
    </div>
  );
}

export default Footer;
