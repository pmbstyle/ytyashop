import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
//import Api from '../../helpers/api'
export default ({
	state: {
		shops:[],
	},
	actions: {
		getShops: async function({commit}){
			let shops = await fetch(process.env.VUE_APP_API_GATE+'/api/shops')
			.then(response => {
				return response.json()
			})
			commit('setShops',shops)
		}
	},
	mutations: {
		setShops(state,shops) {
			state.shops = shops
		}
	},
	getters:{
		shops(state) {
			return state.shops
		}
	}
})