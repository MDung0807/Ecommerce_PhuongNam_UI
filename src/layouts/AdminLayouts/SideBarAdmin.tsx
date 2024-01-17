import { ReactNode, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import React from "react";
import {LaptopOutlined,NotificationOutlined, UserOutlined,CarOutlined,ProfileOutlined, MoneyCollectOutlined, DashboardOutlined,} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./main.scss";
import Title from "antd/es/typography/Title";
import RouterConfigs from "../../configs";
import GetItem from "../../commons/helpers/functions/GetItem";
import { log } from "console";
type MenuItem = Required<MenuProps>['items'][number];

const { Header, Content, Footer, Sider } = Layout;



//#region Define Menu
const items2 = [
  GetItem(
    "Dashboard",
    RouterConfigs.adminRouters.home,
    <DashboardOutlined />,
  ),

  GetItem(
    "Quản lý tài khoản",
    "1",
    <UserOutlined />,
    [
      GetItem("Danh sách tài khoản",  RouterConfigs.adminRouters.manageAccount, ),
      GetItem("Thống kê tài khoản",  '1-1', ),
    ],
  ),
  GetItem(
    "Quản lý shop",
    "2",
    <ProfileOutlined />,
    [
      GetItem("Danh sách shop",  RouterConfigs.adminRouters.manageShop, ),
      GetItem("Thống kê shop",  '2-1', ),
    ],
  ),

  GetItem(
    "Quản lý phương thức thanh toán",
    "3",
    <CarOutlined />,
    [
      GetItem("Danh sách phương thức thanh toán",  RouterConfigs.adminRouters.managePaymentMethod, ),
      GetItem("Thống kê phương thức thanh toán",  '3-1', ),
    ],
  ),

  GetItem(
    "Quản lý phương thức vận chuyển",
    "4",
    <CarOutlined />,
    [
      GetItem("Danh sách phương thức vận chuyển",  RouterConfigs.adminRouters.manageShippingMethod, ),
      GetItem("Thống kê phương thức vận chuyển",  '4-1', ),
    ],
  ),

  GetItem(
    "Quản lý thương hiệu",
    "5",
    <img src="https://cdn5.vectorstock.com/i/1000x1000/96/84/bus-station-icon-in-black-bus-symbol-vector-23369684.jpg" style={{width: "25px", height: "25px"}} />,
    [
      GetItem("Danh sách thương hiệu",  RouterConfigs.adminRouters.manageBrand, ),
      GetItem("Thống kê thương hiệu",  '5-1', ),
    ],
  ),

  GetItem(
    "Quản lý loại mặt hàng",
    "6",
    <MoneyCollectOutlined />,
    [
      GetItem("Danh sách loại mặt hàng",  RouterConfigs.adminRouters.category, ),
      GetItem("Thống kê loại mặt hàng",  '6-1', ),
    ],
  ),

  GetItem(
    "Quản lý cấp bậc tiêu dùng",
    "7",
    <MoneyCollectOutlined />,
    [
      GetItem("Danh sách cấp bậc tiêu dùng",  RouterConfigs.adminRouters.ranks, ),
      GetItem("Thống kê cấp bậc tiêu dùng",  '7-1', ),
    ],
  ),

  GetItem(
    "Quản lý ShopMall",
    "8",
    <img src= "https://cdn2.iconfinder.com/data/icons/moscow-transport/100/__-512.png" alt="" style={{width: "25px", height: "25px"}}/>,
    [
      GetItem("Danh sách ShopMall",  RouterConfigs.adminRouters.shopMall, ),
      GetItem("Thống kê ShopMall",  '8-1', ),
    ],
  ),
];

//#endregion


const SideBarAdmin = ({collapsed, SetCollapsed,}: { collapsed: boolean; SetCollapsed: any;}) => {

  const location = useLocation();
  const selectMenu = items2.filter((item) => {
    if(item?.key === location.pathname) {
      return item.key
    }
    if (item && 'children' in item) {
      const child = item.children?.find((child) => child?.key === location.pathname);
      if (child) {
        return item.key;
      }
    }
    return null;
  });
  
  console.log(selectMenu)
  

  console.log(selectMenu);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  //#region Handle click menu
const handleClick = (e: any) => {
  console.log(e.key)
  navigate(e.key);
}
//#endregion Handel click menu
  return (
    <Sider
      style={{
        background: colorBgContainer,
        overflow: "auto",
        height: "100vh",
        position: "fixed",

      }}
      width={350}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="demo-logo-vertical">
        {!collapsed ? (
          <Title level={3} style={{ color: "Black", margin: 0, padding: 20 }}>
            Menu
          </Title>
        ) : (
          <Title
            level={3}
            style={{ color: "Black", margin: 0, padding: 30 }}
          ></Title>
        )}
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={[selectMenu[0]?.key ? selectMenu[0].key.toString(): '1']}
        style={{ height: "100%"}}
        items={items2}
        theme="light"
        onClick={(e) => {handleClick(e)}}
      />
    </Sider>
  );
};

export default SideBarAdmin;
