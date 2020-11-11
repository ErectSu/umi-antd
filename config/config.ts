import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  // layout配置
  layout: {
    name: 'xwl',
    locale: false,
  },
  antd: {},
  routes,
});
