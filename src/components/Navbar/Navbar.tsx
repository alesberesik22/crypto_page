import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../../assets/images/logo.png";
function Navbar() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const handleSize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.addEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="navbar">
      <div className="nav_container">
        <div className="logo">
          <Avatar src={icon} size={"large"} />
          {activeMenu && (
            <Typography.Title level={2} className="logo_title">
              <Link to="/">Cryptoverse</Link>
            </Typography.Title>
          )}
        </div>
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to={"/"}>Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to={"/exchanges"}>Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to={"/news"}>News</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
