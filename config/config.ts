import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import routes from './routes';

export default defineConfig({
  // layout配置
  layout: {
    name: '花 π 电商管理平台',
    locale: false,
    ...defaultSettings,
    logo: null,
  },
  antd: {},
  routes,
  proxy: {
    '/api': {
      target: 'http://localhost:7001',
      changeOrigin: true,
      pathRewrite: { '^/api': '/' },
    },
  },
});
