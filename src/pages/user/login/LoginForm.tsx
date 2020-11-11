import React, { useState, useEffect } from 'react';
import { Tabs, Form, Input, Button } from 'antd';
import { useCountDown } from 'ahooks';
import './index.less';

const LoginForm: React.FC<{}> = () => {
  let timer: any = null;
  const [type, setType] = useState<string>('account');
  const [captcha, setCaptcha] = useState<string>('获取验证码');
  const [second, setTargetDate] = useCountDown();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const changeTabs = (e: string) => {
    setType(e);
    form.resetFields();
    setTargetDate(undefined);
    setCaptcha('获取验证码');
  };

  const sendCaptcha = () => {
    const mobile = form.getFieldValue('mobile');
    if (!mobile) {
      setCaptcha('重新获取验证码');
      form.validateFields(['mobile']);
    } else {
      setTargetDate(Date.now() + 60000);
    }
  };

  return (
    <div style={{ width: 300 }}>
      <Form name="login" form={form} onFinish={onFinish}>
        <Tabs
          activeKey={type}
          onChange={(e: string) => changeTabs(e)}
          size="large"
        >
          <Tabs.TabPane key="account" tab="账号登陆" />
          <Tabs.TabPane key="mobile" tab="手机登录" />
          <Tabs.TabPane key="QRCode" tab="扫码登录" />
        </Tabs>
        {type === 'account' && (
          <>
            <Form.Item
              name="account"
              // label="账号"
              rules={[{ required: true, message: '请填写账号信息！' }]}
            >
              <Input placeholder="账号/手机号/邮箱" size="large" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '密码不得为空！' }]}
            >
              <Input.Password placeholder="密码" size="large" />
            </Form.Item>
          </>
        )}
        {type === 'mobile' && (
          <>
            <Form.Item
              name="mobile"
              rules={[
                { required: true, message: '手机号不得为空！' },
                {
                  pattern: /^1\d{10}$/,
                  message: '手机号格式错误！',
                },
              ]}
            >
              <Input placeholder="手机号" size="large" />
            </Form.Item>
            <Form.Item
              name="captcha"
              rules={[{ required: true, message: '请填写验证码！' }]}
            >
              <Input
                placeholder="验证码"
                size="large"
                suffix={
                  <a onClick={sendCaptcha}>
                    {second === 0
                      ? captcha
                      : `${Math.round(second / 1000)}s后重新获取`}
                  </a>
                }
              />
            </Form.Item>
          </>
        )}
        {type !== 'QRCode' && (
          <>
            <Form.Item>
              <Button type="primary" size="large" block htmlType="submit">
                登录
              </Button>
            </Form.Item>
            <a className="forget-pw">忘记密码？</a>
          </>
        )}
      </Form>
    </div>
  );
};

export default LoginForm;
