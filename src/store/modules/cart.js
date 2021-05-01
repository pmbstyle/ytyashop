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
        removeFromCart(state,product){
            let i = 0
            state.cart.map((c,index) => {
                if(c.product.id == product) {
                    i = index
                }
            })
            state.cart.splice(i,1)
        },
        reduceQty(state,product) {
            let i = 0
            let remove = false
            state.cart.map((c,index) => {
                if(c.product.id == product) {
                    remove = c.product.qty == 1 ? true : false
                    i = index
                }
            })
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