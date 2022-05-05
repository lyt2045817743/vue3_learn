import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHashHistory } from "vue-router";
import routes from './router/index'
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
// console.log(router, 'router');
const app = createApp(App).mount('#app')
console.log(app, 'app');
