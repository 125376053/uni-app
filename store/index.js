import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		userInfo: ''
	},
	mutations: {
		userInfo(state, value) {
			console.log(value)
			state.userInfo = value
		}
	},
	getters:{
		userInfo(state){
			return state.userInfo
		}
	}
});
export default store
