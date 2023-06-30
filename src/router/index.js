import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import { getStorage, setStorage } from 'utils';

export const constantRoutes = [
    {
        path: "/",
        redirect: '/home',
    },

    {
        path: '/home',
        name: 'home',
        menuImg: "home",
        reId: 1,
        menuId: 101,
        component: () => import(/* webpackChunkName: 'home-page' */ '@/views/HomePage/index.vue'),
        meta: {
            title: 'home',
            icon: 'home'
        }
    },
    {
        path: '/homeEditor',
        name: 'homeEditor',
        menuImg: "homeEditor",
        reId: 2,
        menuId: 102,
        component: () => import(/* webpackChunkName: 'home-page' */ '@/views/HomePage/indexEditor.vue'),
        meta: {
            title: 'homeEditor',
        }
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes: constantRoutes
});
router.beforeEach((to, from, next) => {
    // 获取 token
    let token = getStorage('TOKEN') || to.query.token;
    if (to.path === '/home' || '/homeEditor' === to.path) {
        next();
    } else {
        if (!token) {
            console.log('暂无权限')
        } else {
            next();
        }
    }
})

export default router;
