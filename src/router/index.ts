// import ToRefs from '../pages/toRefs/toRefs';
const Home = () =>  import('../pages/Home/index.vue');

const routes = [{
    path: '/',
    component: Home
}]

export default routes