import { ReactNode, useState } from "react";
import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Collapse, Layout, Menu, theme } from "antd";

import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import SideBar from "./SideBarAdmin";

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Layout hasSider style={{minHeight: 600}}>
        <SideBar collapsed={collapsed} SetCollapsed={setCollapsed} />
        <AdminHeader
          collapsed={collapsed}
          SetCollapsed={setCollapsed}
          children={children}
        />
      </Layout>
      <AdminFooter Collapse={collapsed}/>
    </div>
  );
};

export default AdminLayout;
