<template>
	<section id="product">
        <div class="wrapper">
            <sidebar/>
            <main v-if="!loading">
                <div class="card mb-30">
                    <div class="product-grid">
                        <div class="product-image" :style="{backgroundImage: 'url('+domain+'/images/'+product.image+')'}"></div>
                        <div class="actions">
                            <h1>{{product.name}}</h1>
                            <div>
                                <div><strong>Категория</strong>: {{product.category.name}}</div>
                                <div class="price pt-20"><strong>Цена:</strong> {{price}} руб. {{product.expired == 2 ? '/ мес' : ''}}</div> 
                            </div>
                            <div class="action-buttons">
                                <div class="quantity" v-if="product.features.length == 0">
                                    <div class="minus" @click="minus()">-</div>
                                    <div class="input">{{qty}}</div>
                                    <div class="plus" @click="plus()">+</div>
                                </div>
                                <button class="button-orange" @click="toCart()">Купить</button>
                            </div>
                        </div>
                        <div class="options" v-if="product.features.length > 0">
                            <span class="clickable">Добавить к сравнению</span>
                        </div>
                    </div>
                </div>
                <div class="card mb-30">
                    <h2 class="pb-20">Описание</h2>
                    <div class="product-description" v-html="product.description"></div>
                </div>
                <div class="card mb-30" v-if="product.features.length > 0">
                    <h2 class="pb-20">Преимущества</h2>
                    <ul class="features-list">
                        <li class="feature" v-for="feature in product.features" :key="feature.id">{{feature.name}}</li>
                    </ul>
                </div>
            </main>
            
        </div>
        <modal name="addToCart" :height="370">
            <div class="modal-title">
                <span class="title">Корзина обновлена</span>
                <span class="close-modal" @click="closeModal()">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99173 5.27305L11.9503 0.313965L13.6696 2.04969L8.72689 6.99183L13.6696 11.9503L11.9503 13.6697L6.99173 8.72698L2.04959 13.6697L0.313873 11.9503L5.27295 6.99183L0.313873 2.04969L2.04959 0.313965L6.99173 5.27305Z" fill="#363636"/>
                    </svg>
                </span>
            </div>
            <div class="modal-content">
                <div class="cart-modal-content">
                    <div class="icon-cart"></div>
                    <div class="message">
                        <p class="mt-0">Следующие товары были добавлены в корзину:</p>
                        <p v-if="product.shop"><strong>Сервер {{product.shop.name}} - {{product.name}}</strong> x {{qty}}</p>
                        <p class="mb-0">Хотите перейти к корзине или продолжить покупки?</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="mr-10" @click="closeModal()" >Продолжить покупки</button>
                <button class="button-orange" @click="$router.push({name:'Cart'})" >Перейти в корзину</button>
            </div>
        </modal>
    </section>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
import sidebar from '../components/sidebar'
export default {
	name: 'Product',
	components: {
		sidebar
	},
	computed: {
		...mapGetters(['product']),
		domain: function() {
			return process.env.VUE_APP_API_GATE
		},
        price: function() {
            return this.product.price * this.qty
        }
	},
	data: function(){
		return {
			loading:true,
            qty:1
		}
	},
	mounted: async function() {
		await this.getProduct(this.$route.params.id)
		this.loading = false
	},
	methods: {
		...mapActions(['getProduct']),
		...mapMutations(['addToCart']),
        toCart:function() {
            this.addToCart({
                product:this.product,
                qty:this.qty
            })
            this.$modal.show('addToCart')
        },
        plus: function() {
            this.qty++
        },
        minus: function() {
            this.qty = this.qty > 1 ? this.qty-1 : this.qty
        },
        closeModal: function() {
            this.$modal.hide('addToCart')
            this.qty = 1
        }
	}
}
</script>
