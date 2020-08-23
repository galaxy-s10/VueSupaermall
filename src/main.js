import Vue from 'vue'
import App from './App.vue'
import router from './rotuer/index';
import store from './store/index';
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import toast from './components/comm/toast'
import VueLazyload from 'vue-lazyload'
// import 'swiper/css/swiper.css'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/loading.gif'),
  loading: require('./assets/loading.gif'),
  attempt: 1
})


Vue.prototype.$bus = new Vue()
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')