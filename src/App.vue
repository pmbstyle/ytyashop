<template>
<div id="app">
	<app-head/>
	<main>
		<router-view/>
	</main>
	<app-foot/>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import appHead from '@/components/header'
import appFoot from '@/components/footer'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
Vue.use(VueAxios, axios)
Vue.use(Vuesax, {
	// options here
})
export default {
	name:'App',
	components: {
		appHead,
		appFoot
	},
}
</script>