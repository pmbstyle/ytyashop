import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
//import Api from '../../helpers/api'
export default ({
	state: {
		serverOnline:0,
	},
	actions: {
		getServerOnline: async function({commit},server){
			let online = await fetch(process.env.VUE_APP_API_GATE+'/api/ping/'+server)
			.then(response => {
				return response.players
			})
			commit('setServerOnline',online)
		}
	},
	mutations: {
		setServerOnline(state,online) {
			state.serverOnline = online || 0
		}
	},
	getters:{
		serverOnline(state) {
			return state.serverOnline
		}
	}
})