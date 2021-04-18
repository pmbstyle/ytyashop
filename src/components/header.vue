<template>
	<header>
		<div class="overflow1"></div>
		<div class="overflow">
			<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
            </ul>
		</div>
		<div class="header-content">
			<div class="top-bar">
				<div class="wrapper">
					<div class="cart">
						<div class="cart-left">Корзина (0)</div>
						<i class="mdi mdi-cart"></i>
					</div>
				</div>
				
			</div>
			<div class="bar">
				<div class="wrapper">
					<div class="stats-wrap"
							v-clipboard="ip"
							v-clipboard:success="copied">
						<div class="content">
							<div class="title">mc.ytya.ru</div>
							<div class="subtitle">{{serverOnline}} игроков онлайн</div>
						</div>
						<div class="mdi mdi-minecraft"></div>
					</div>
					<div class="logo-wrap">
						<div class="logo"></div>
					</div>
					<div class="discord-wrap">
						<div class="mdi mdi-discord"></div>
						<div class="content">
							<div class="title">Наш Discord</div>
							<div class="subtitle">Присоединяйся!</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import Vue from 'vue'
import Clipboard from 'v-clipboard'

Vue.use(Clipboard)
export default {
	name: 'header',
	data: function(){
		return {
			ip:'mc.ytya.ru'
		}
	},
	computed: {
		...mapGetters(['serverOnline'])
	},
	mounted: function() {
		this.getServerOnline('TEST')
	},
	methods: {
		...mapActions(['getServerOnline']),
		copied: function() {
			this.$notify({
				title: 'IP скопирован',
				text: 'Мы скопировали IP сервера для вас.',
				type: 'success',
				duration: 5000,
				speed: 1000
			})
		}
	}
}
</script>
