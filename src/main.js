import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHistory } from "vue-router";
import routes from './router/index'
const router = createRouter({
    history: createWebHistory(),
    routes
})
// console.log(router, 'router');
const app = createApp(App).use(router).mount('#app')
console.log(app, 'app');
