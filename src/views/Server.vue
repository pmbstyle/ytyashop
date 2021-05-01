<template>
	<section id="server">
        <div class="wrapper">
            <sidebar/>
            <main>
                <div class="card mb-30">
                    <h1 class="text-center pb-20">Сервер <span>{{shop.name}}</span></h1>
                    <div class="category-list">
                        <div v-for="category in categories" :key="category.id"
							class="category"
							:class="{active:activeCategory == category.id}"
							@click="setActiveCategory(category.id)">
                            {{category.name}}
                        </div>
                    </div>
                    <div class="product-list">
                        <div class="product"
							v-for="product in categoryProducts"
							:key="product.id"
							@click="$route.push({name:'Product', params:{slug:shop.id,id:product.id}})">
							<div class="image" 
								:style="{backgroundImage: 'url('+domain+'/images/'+product.image+')'}">
								<div class="desc">
									<div class="cat">Категория: <span>{{categoryName(product.category_id)}}</span></div>
									<div class="title">{{product.name}}</div>
									<div class="price">Цена: {{product.price}} руб. {{product.expired == 2 ? '/ мес' : ''}}</div>
								</div>
							</div>
						</div>
                    </div>
                </div>
            </main>
            
        </div>
    </section>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
import sidebar from '../components/sidebar'
export default {
	name: 'Server',
	components: {
		sidebar
	},
	computed: {
		...mapGetters(['shop','categories','activeCategory']),
		domain: function() {
			return process.env.VUE_APP_API_GATE
		},
		categoryProducts: function() {
			let products = []
			if(this.shop.products) {
				this.shop.products.map(p => {
					if(p.category_id == this.activeCategory || this.activeCategory == 0) {
						products.push(p)
					}
				})
			}
			return products
		}
	},
	watch: {
		async '$route.params.slug' () {
			this.loading = true
			await this.getShop(this.$route.params.slug)
			this.loading = false
		}
	},
	data: function(){
		return {
			loading:true
		}
	},
	mounted: async function() {
		await this.getShop(this.$route.params.slug)
		this.loading = false
	},
	methods: {
		...mapActions(['getShop']),
		...mapMutations(['setActiveCategory']),
		categoryName: function(id) {
			let name = ''
			this.categories.map((category) => {
				if (category.id == id) {
					name = category.name
				}
			})
			return name
		}
	}
}
</script>
