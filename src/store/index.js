import Vue from 'vue'
import Vuex from 'vuex'
import shops from './modules/shops'
import online from './modules/online'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		shops,
		online,
		cart
	}
})

