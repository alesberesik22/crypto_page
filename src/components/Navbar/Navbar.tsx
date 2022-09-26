import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav_container">
        <div className="logo">
          <Avatar />
          <Typography.Title level={2} className="logo_title">
            <Link to="/">Cryptoverse</Link>
          </Typography.Title>
          <Button className="nav_button"></Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
