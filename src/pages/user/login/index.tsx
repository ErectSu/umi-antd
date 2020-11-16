import Footer from '@/components/Footer';
import React from 'react';
import { Helmet } from 'umi';
import './index.less';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>花 π 电商管理平台</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="login">
        <div className="title">花 π 电商管理平台</div>
        <div className="content">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
