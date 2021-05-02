import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
//import Api from '../../helpers/api'
export default ({
	state: {
		cart:[]
	},
	actions: {

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
        }
	},
	getters:{
		cart(state) {
			return state.cart
		}
	}
})