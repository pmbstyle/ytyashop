<template>
	<section id="cart">
		<div class="wrapper">
            <sidebar/>
            <main>
                <div class="card mb-30">
                    <h1 class="text-center">Корзина</h1>
                    <div class="text-center" v-if="cart.length == 0">
                        <p class="pt-20 pb-20">Корзина пуста, вернуться на главную страницу?</p>
                        <button class="button-orange" @click="$router.push({name:'Home'})" >Перейти на главную</button>
                    </div>
                </div>
                <div class="card cart-list mb-30" v-if="cart.length > 0">
                    <div class="cart-product" v-for="(item, index) in cart" :key="item.product.id">
                        <div class="image"  :style="{backgroundImage: 'url('+domain+'/images/'+item.product.image+')'}"></div>
                        <div class="name">
                            <p>{{item.product.name}}</p>
                            <span>сервер {{item.product.shop.name}}</span>
                        </div>
                        <div class="quantity" v-if="item.product.features.length == 0">
                            <div class="minus" @click="reduceQty(index)">-</div>
                            <div class="input">{{item.qty}}</div>
                            <div class="plus" @click="incruseQty(index)">+</div>
                        </div>
                        <div class="price">{{item.qty * item.product.price}} руб.</div>
                        <div class="action">
                            <button @click="removeFromCart(index)">Удалить</button>
                        </div>
                    </div>
                </div>
                <div class="card cart-total mb-30" v-if="cart.length > 0">
                    <div class="player-details">
                        <label for="player">Ваш ник (обязательно):</label>
                        <input type="text" class="text-input ml-10" name="player" id="player" placeholder="Ник персонажа" v-model="playerName">
                    </div>
                    <div class="total">
                        <label>
                            <input type="checkbox" name="agreement" v-model="agreement">
                            я соглашаюсь с <router-link class="color-orange" :to="{name:'Terms'}">условиями</router-link>
                        </label>
                        <div>
                            <span>К оплате: <strong>{{cartTotal}} руб.</strong></span>
                            <button class="button-orange ml-30" @click="getPaymentLink()" :disabled="playerName.length < 3 || !agreement">Перейти к оплате</button>
                        </div>
                    </div>
                </div>
                <div class="card" v-if="cart.length > 0">
                    Для получения привилегии <span class="color-orange">вы должны играть на сервере</span>, зайти как минимум один раз. <br/>
                    Для получения блока <span class="color-orange">вам необходимо быть онлайн</span> под указанным при заказе аккаунтом.
                    Освободите место в инвентаре для приобретаемых блоков.<br/><br/>
                    Если у вас возникли проблемы с получением оплаченого доната, обращайтесь в наш Discord, либо группу Vk.
                </div>
            </main>
		</div>
	</section>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
import sidebar from '../components/sidebar'
export default {
	name: 'Cart',
    components: {
        sidebar
    },
	computed: {
		...mapGetters(['cart']),
		domain: function() {
			return process.env.VUE_APP_API_GATE
		},
        cartTotal: function() {
            let total = 0
            this.cart.forEach(item => {
                total = total + (item.product.price*item.qty)
            })
            return total
        }
	},
	data: function(){
		return {
			loading:true,
            playerName: '',
            agreement: true,
            coupon:''
		}
	},
	mounted: async function() {
		this.loading = false
	},
	methods: {
		...mapActions([]),
		...mapMutations(['incruseQty','reduceQty','removeFromCart']),
	}
}
</script>
