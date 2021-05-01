import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
//import Api from '../../helpers/api'
export default ({
	state: {
		shops:[],
		shop:{},
		categories:[],
		activeCategory:0,
		product:{}
	},
	actions: {
		getShops: async function({commit}){
			let shops = await fetch(process.env.VUE_APP_API_GATE+'/api/shops')
			.then(response => {
				return response.json()
			})
			commit('setShops',shops)
		},
		getShop: async function({commit},slug){
			let shop = await fetch(process.env.VUE_APP_API_GATE+'/api/shop/'+slug)
			.then(response => {
				return response.json()
			})
			let categories = shop[0].categories
			categories.unshift({id:0, name:'Все'})
			commit('setShop',shop[0])
			commit('setCategories',categories)
			commit('setActiveCategory',categories[0].id)
		},
		getProduct: async function({commit},id) {
			let product = await fetch(process.env.VUE_APP_API_GATE+'/api/product/'+id)
			.then(response => {
				return response.json()
			})
			commit('setProduct',product[0])
		}
	},
	mutations: {
		setShops(state,shops) {
			state.shops = shops
		},
		setShop(state,shop) {
			state.shop = shop
		},
		setCategories(state,categories) {
			state.categories = categories
		},
		setActiveCategory(state,id) {
			state.activeCategory = id
		},
		setProduct(state,product) {
			state.product = product
		},
	},
	getters:{
		shops(state) {
			return state.shops
		},
		shop(state) {
			return state.shop
		},
		categories(state) {
			return state.categories
		},
		activeCategory(state) {
			return state.activeCategory
		},
		product(state) {
			return state.product
		}
	}
})