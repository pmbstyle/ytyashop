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
                        <div class="options">
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
        },
        plus: function() {
            this.qty++
        },
        minus: function() {
            this.qty = this.qty > 1 ? this.qty-1 : this.qty
        }
	}
}
</script>
