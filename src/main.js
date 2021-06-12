import { createApp } from 'vue'
import App from './App.vue'
/* eslint-disable-next-line */
import router from './router/router'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import './assets/common.css'

createApp(App).use(ElementPlus).use(router).mount('#app')



