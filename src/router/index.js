import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

const createRouter = () => new Router({
    routes: [

        {
            path: '/',
            component: () => import('@/view/home/index')
        },

        {
            path: '/page2',
            component: () => import('@/view/admission/admission.vue')
        },
        {
            path: '/page3',
            component: () => import('@/view/military')
        },
        {
            path: '/page4',
            component: () => import('@/view/dormitory')
        },
        {
            path: '/page5',
            component: () => import('@/view/test')
        },
        {
            path: '/page6',
            component: () => import('@/view/sports')
        },
        {
            path: '/page65',
            component: () => import('@/view/sports/index2')
        },
        {
            path: '/page7',
            component: () => import('@/view/lesson')
        },
        {
            path: '/page8',
            component: () => import('@/view/food')
        },
        {
            path: '/page9',
            component: () => import('@/view/scenery')
        },
        {
            path: '/page10',
            component: () => import('@/view/sing')
        },
        {
            path: '/end',
            component: () => import('@/view/home/end')
        },



        {
            path: '/cas/login',
            name: 'CasLogin',
            component: () => import('@/view/login/CasLogin'),
            hidden: true
        },

        {
            path: '/login/token',
            name: 'LoginByToken',
            component: () => import('@/view/login/LoginByToken'),
            hidden: true
        },
    ]
})

const router = createRouter()

export function resetRouter () {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
