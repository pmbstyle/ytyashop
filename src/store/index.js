import Vue from 'vue'
import Vuex from 'vuex'
import shops from './modules/shops'
import online from './modules/online'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		shops,
		online
	}
})

