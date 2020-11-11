import React from 'react'
import './index.less'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <div className="title">花 π 电商管理平台</div>
        <div className="content">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
