import { Button, Input, Layout } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useState } from 'react';
import './main.scss'

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your login logic here
        
    };

    return (
        <div className="layoutLogin">
            <Layout className='loginForm'>
            <Title style={{padding: "30px"}}>Login</Title>
            <Input style={{padding: "10px", width: "200px", marginBottom: 30}} placeholder='Tên đăng nhập'></Input>
            <Input.Password style={{padding: "10px", width: "200px", marginBottom: 50}} placeholder='Mật khẩu'></Input.Password>
            <Button style={{padding:10, width: "200px", marginBottom: 30}}
             type='primary'
             onClick={handleSubmit}>Đăng nhập</Button>
        </Layout>
        </div>
    );
};

export default LoginPage;
