<template>
	<section id="server">
        <div class="wrapper">
            <!-- <Sidebar history={this.props.history} match={this.props.match}/> -->
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
                        products
                    </div>
                </div>
            </main>
            
        </div>
    </section>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
export default {
	name: 'Server',
	computed: {
		...mapGetters(['shop','categories','activeCategory']),
		domain: function() {
			return process.env.VUE_APP_API_GATE
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
	}
}
</script>
