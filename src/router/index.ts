import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import User from '@/views/User.vue'
import component from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/user/:uid',
        name: 'user',
        component: User
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/api',
        name: 'Api',
        component: () =>
            import(/* webpackChunkName: "api" */ '../views/Api.vue'),
    },
    {
        path: '/design',
        name: 'Design',
        component: () =>
            import(/* webpackChunkName: "api" */ '../views/Design.vue'),
    },
    {
        path: '/event',
        name: 'Event',
        component: () =>
            import(/* webpackChunkName: "api" */ '../views/Event.vue'),
    },
    {
        path: '/firebase',
        name: 'FireBase',
        component: () =>
            import(/* webpackChunkName: "api" */ '../views/FireBase.vue'),
    },
    {
        path: '/easiest',
        name: 'Easiest',
        component: () =>
            import(/* webpackChunkName: "api" */ '../views/Easiest.vue'),
    },
    {
        path: '/userlist',
        name: 'UserList',
        component: () =>
            import(/* webpackChunkName: "api" */ '../easiest/comp/UserList.vue'),
        children: [
            {
                path: 'profile/:id/:pref',
                component: () =>
                    import(/* webpackChunkName: "api" */ '../easiest/comp/UserList-Profile.vue'),
            }
        ]
    },
    {
        path: '/vue-component/:id/:name',
        name: 'VueComponent',
        component: () =>
            import(/* webpackChunkName: "api" */ '../easiest/comp/VueComponent.vue'),

    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
