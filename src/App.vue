<template>
<div id="app">
	<notifications position="top left"/>
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
Vue.use(VueAxios, axios)
export default {
	name:'App',
	components: {
		appHead,
		appFoot
	},
}
</script>