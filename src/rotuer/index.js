import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () =>
    import('view/home/Home.vue')
const ShopCart = () =>
    import('view/shopcart/ShopCart.vue')
const Category = () =>
    import('view/category/Category.vue')
const Profile = () =>
    import('view/profile/Profile.vue')
const Detail = () =>
    import('view/detail/Detail.vue')


const routes = [
    { path: '/', meta: { bottomNav: true }, redirect: '/home' },
    { path: '/home', meta: { bottomNav: true }, component: Home },
    { path: '/shopcart', component: ShopCart },
    { path: '/category', component: Category },
    { path: '/profile', component: Profile },
    // { path: '/detail/iid', meta: { bottomNav: true }, name: 'detail', component: Detail },
    { path: '/detail/:iid', meta: { bottomNav: true }, name: 'detail', component: Detail },
    { path: '*', component: () => import('view/404/index.vue') },
]

const router = new VueRouter({
    mode: 'history',
    base: '/mogujie/',
    routes
})


export default router