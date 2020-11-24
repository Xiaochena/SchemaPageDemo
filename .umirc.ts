import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: 'SchemaPage',
  },
  locale: {
    default: 'zh-CN',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/schema-page-demo',
      name: 'SchemaPageDemo',
      component: '@/pages/SchemaPageDemo',
    },
    {
      path: 'compared',
      name: '对比',
      component: '@/pages/Compared',
    },
  ],
});
