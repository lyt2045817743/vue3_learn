import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueRouter from "vue-router";
import routes from './router/index'
const router = new VueRouter({
    routes
})
// console.log(router, 'router');
createApp(App, { router }).mount('#app')
// console.log(app, 'app');
