import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.bus=new Vue()

App.mpType = 'app'

import store from './store/index.js';
Vue.prototype.$store = store //挂载到原型下 不能使用注入store

// 全局引入工具方法
import * as utils from './utils/index.js';
Object.keys(utils).forEach(key => {
    console.log(key)
    console.log(utils[key])
    Vue.prototype[key]=utils[key]
});

const app = new Vue({
    ...App
})
app.$mount()
