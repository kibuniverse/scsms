/*
 * @Author: your name
 * @Date: 2021-05-12 17:19:38
 * @LastEditTime: 2021-05-12 19:43:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \scsms\src\main.ts
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')