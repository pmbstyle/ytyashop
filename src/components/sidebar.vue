<template>
	<aside>
        <nav class="shop-selector">
            <ul>
                <li v-for="shop in shops" :key="shop.id"
                    class="banner"
                    :class="{active:$route.params.slug == shop.slug}"
                    @click="$router.push({name:'Server',params:{slug:shop.slug}})">
                    <div :style="{backgroundImage: 'url('+domain+'/images/'+shop.image+')'}"></div>
                    <span>Сервер {{shop.name}}</span>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
	name: 'sidebar',
	data: function(){
		return {
			
		}
	},
	computed: {
		...mapGetters(['shops']),
        domain: function() {
			return process.env.VUE_APP_API_GATE
		},
	},
	mounted: async function() {
		if(this.shops.length == 0) {
            await this.getShops()
        }
	},
	methods: {
		...mapActions(['getShops']),
	}
}
</script>
