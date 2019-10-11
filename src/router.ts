import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: () => import('./views/Portfolio.vue'),
        },
        {
            path: '/pens',
            name: 'Pens',
            component: () => import('./views/Pens.vue'),
        },
        {
            path: '*',
            redirect: '/',
        },
    ],
});
