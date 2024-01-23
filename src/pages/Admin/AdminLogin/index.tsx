import { Button, Input, Layout } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import "./main.scss";
import { adminLogin } from "../../../services/AuthServices";
import { Route, useNavigate } from "react-router-dom";
import RouterConfigs from "../../../configs";
const AdminLogin: React.FC = () => {
  const [loginForm, setLoginForm] = useState({});

  const navigate = useNavigate();
  //**Create function update data */
  const hanldData = (data: any) => {
    if (!data.isError && data.isError !== undefined) {
      localStorage.setItem("token", data.data.token);
      navigate(RouterConfigs.adminRouters.home);
    } else {
    }
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginForm((prevForm) => ({
      ...prevForm,
      IdDeceive: "SystemAdmin",
    }));
    console.log(loginForm);
    // Add your login logic here
    const response = await adminLogin(loginForm);
    hanldData(response);
    console.log(response);
  };

  return (
    <div className="layoutLogin">
      <Layout className="loginForm">
        <Title style={{ padding: "30px" }}>Login</Title>
        <Input
          style={{ padding: "10px", width: "200px", marginBottom: 30 }}
          placeholder="Tên đăng nhập"
          name="Username"
          onChange={handleChange}
        ></Input>
        <Input.Password
          type="password"
          style={{ padding: "10px", width: "200px", marginBottom: 50 }}
          placeholder="Mật khẩu"
          name="Password"
          onChange={handleChange}
        ></Input.Password>
        <Button
          style={{ width: "200px", marginBottom: 30 }}
          onClick={handleSubmit}
        >
          Đăng nhập
        </Button>
      </Layout>
    </div>
  );
};

export default AdminLogin;
