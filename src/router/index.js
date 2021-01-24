import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/projects',
            name: 'Projects',
            component: () => import('../views/Projects.vue')
        },
        {
            path: '/get-in-touch',
            name: 'Contact',
            component: () => import('../views/Contact.vue')
        },
        {
            path: '/resume',
            name: 'Resume',
            component: () => import('../views/Resume.vue')
        },
        {
            path: '/:catchAll(.*)',
            name: '404',
            component: () => import('../views/404.vue')
        }
    ],
    history: createWebHistory()
})