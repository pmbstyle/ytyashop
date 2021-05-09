import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import Api from '../../helpers/api'
export default ({
	state: {
		cart:[],
        purchase:{}
	},
	actions: {
        getPurchaseLink: async function({commit,state}, buyer) {
            let items = []
            state.cart.map(item => {
                items.push(item.product.trademc_id+':'+item.qty)
            })

            let purchase = await Api().post(process.env.VUE_APP_API_GATE+'/api/buy-items',{
                items:items,
                buyer:buyer
            }).then(response => {
				return response.data.pay_url
			})

            commit('setPurchase', purchase)
        }
	},
	mutations: {
		addToCart(state,product) {
			state.cart.push({product:product.product,qty:product.qty})
		},
        removeFromCart(state,i){
            state.cart.splice(i,1)
        },
        incruseQty(state,i) {
            state.cart[i].qty = state.cart[i].qty + 1
        },
        reduceQty(state,i) {
            let remove = false
            remove = state.cart[i].qty == 1 ? true : false
            if(remove) {
                state.cart.splice(i,1)
            } else {
                state.cart[i].qty = state.cart[i].qty - 1
            }
        },
        setPurchase(state,p) {
            state.purchase = p
        }
	},
	getters:{
		cart(state) {
			return state.cart
		},
        purchase(state) {
            return state.purchase
        }
	}
})