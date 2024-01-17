import React, { ReactNode, useState } from "react";
import {
  HomeOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Button, Grid, Layout, Menu, Popconfirm, theme } from "antd";
import Title from "antd/es/typography/Title";

const { Header, Content, Footer, Sider } = Layout;

const AdminHeader = ({
  collapsed,
  SetCollapsed,
  children,
}: {  
  collapsed: boolean;
  SetCollapsed: any;
  children: React.ReactNode;
}) => {
  const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
console.log("loading");
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <Layout style={{ marginLeft: collapsed? 80:350, background: "#ffff" }}>
      <Header style={{ padding: 20 }} className="HeaderAdmin">
        <div style={{display: "flex"}}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => SetCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
          <Title level={2} style={{ color: "black" , display: "grid", placeItems: "center", margin: 0}}>
            Admin
          </Title>
        </div>

        <Popconfirm
          title="Title"
          description="Description"
          open={open}
          onConfirm={handleOk}
          okButtonProps={{ loading: confirmLoading }}
          onCancel={handleCancel}
          style={{border: 0, padding:"50px", margin: '50'}}
        >
          <Button icon={<LogoutOutlined style={{fontSize:30}}/>} onClick={showPopconfirm} style={{border: 0, paddingRight: "60px", marginBottom:"7px"}}></Button>
        </Popconfirm>
      </Header>
      <Breadcrumb
    items={[
      {
        href: '',
        title: <HomeOutlined />,
      },
      {
        href: '',
        title: (
          <>
            <UserOutlined />
            <span>Application List</span>
          </>
        ),
      },
      {
        title: 'Application',
      },
    ]}
  />
      <Content
        style={{
          minHeight: 280,
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};

export default AdminHeader;
