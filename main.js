import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.bus=new Vue()

App.mpType = 'app'

import store from './store/index.js';
Vue.prototype.$store = store //挂载到原型下 不能使用注入store

const app = new Vue({
    ...App
})
app.$mount()
