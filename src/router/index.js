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
        // 首页
        {
            path: '/',
            name: 'home',
            component: () => import('@/view/home/index')
        },
        // 首页第二页
        {
            path: '/page',
            name: 'Page',
            component: () => import('@/view/page')
        },
        // 教师上课篇
        {
            path: '/lesson/teacher',
            name: 'LessonTeacher',
            component: () => import('@/view/lesson/teacher.vue')
        },
        // 学生上课篇
        {
            path: '/lesson/student',
            name: 'LessonStudent',
            component: () => import('@/view/lesson/student.vue')
        },
        {
            path: '/lesson/building',
            name: 'LessonBuilding',
            component: () => import('@/view/lesson/student2.vue')
        },
        // 食堂篇
        {
            path: '/canteen',
            name: 'Canteen',
            component: () => import('@/view/canteen')
        },
        // 校园网篇
        {
            path: '/network',
            name: 'Network',
            component: () => import('@/view/network')
        },
        // 图书馆篇
        {
            path: '/library',
            name: 'Library',
            component: () => import('@/view/library')
        },
        // 运动篇
        {
            path: '/sport',
            name: 'Sport',
            component: () => import('@/view/sport')
        },
        // 总结引入
        {
            path: '/person/intro',
            name: 'PersonIntro',
            component: () => import('@/view/home/intro.vue')
        },
        // 个人形象
        {
            path: '/person/page',
            name: 'Person',
            component: () => import('@/view/page/person.vue')
        },
        // 结尾
        {
            path: '/end',
            name: 'End',
            component: () => import('@/view/home/end.vue')
        },
        // 结尾2
        {
            path: '/end2',
            name: 'End2',
            component: () => import('@/view/home/end2.vue')
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
