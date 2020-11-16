import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="xwl 个人学习使用 不作商业用途"
    links={[
      {
        key: 'umi antd',
        title: 'Umi Antd',
        href: 'https://github.com/xppcnn/umi-antd',
        blankTarget: true,
      },

      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/xppcnn/umi-antd',
        blankTarget: true,
      },

      {
        key: 'Ant Design Pro',
        title: 'Ant Design Pro',
        href: 'https://pro.ant.design',
        blankTarget: true,
      },
    ]}
  />
);
