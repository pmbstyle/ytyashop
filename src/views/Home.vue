<template>
	<section class="home">
		<div class="wrapper">
			<div class="card mb-30">
				<div class="text-center pb-10"><strong v-html="$ml.get('welcome')"></strong></div>
				<div style="padding:0 150px;" class="text-center" v-html="$ml.get('welcome2')"></div>
				<div class="text-center pt-10" v-html="$ml.get('welcome3')"></div>
			</div>
			<div class="card mb-30">
				<div class="on-horse"></div>
				<div class="give_five"></div>
				<h1 class="text-center pb-20" v-html="$ml.get('chooseServer')"></h1>
				<div class="server-list">
					<div class="server" v-for="shop in shops" :key="shop.id" @click="$router.push({name:'Shop',params:{slug:shop.slug}})">
						<div class="image" v-bind:style="{ 'background-image': 'url('+domain+'/images/'+shop.image + ')' }">
							<div class="title">{{shop.name}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
//import { MLBuilder } from 'vue-multilanguage'
export default {
	name: 'Home',
	computed: {
		...mapGetters(['shops']),
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
		await this.getShops()
		this.loading = false
	},
	methods: {
		...mapActions(['getShops']),
	}
}
</script>
