import { createRouter, createWebHistory } from 'vue-router';
import HelloJSX from './components/HelloJSX';
import HelloWorld from './components/HelloWorld';
import HelloTest from './components/HelloTest';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld,
    }
    ,
    {
      path: '/jsx',
      name: 'jsx',
      component: HelloJSX,
    }
    ,
    {
      path: '/test',
      name: 'test',
      component: HelloTest,
    }
  ],
});