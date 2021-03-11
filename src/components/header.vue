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
					<div class="language">
						<span v-text="$ml.get('language')"></span>
						<span class="langs" @click="$ml.change('russian')">Русский</span>
						<span>|</span>
						<span class="langs" @click="$ml.change('english')">English</span>
					</div>
					<div class="cart">
						<div class="cart-left" v-text="$ml.with(0).get('cart')"></div>
						<i class="mdi mdi-cart"></i>
					</div>
				</div>
				
			</div>
			<div class="bar">
				<div class="wrapper">
					<div class="stats-wrap">
						<div class="content">
							<div class="title">mc.ytya.ru</div>
							<div class="subtitle" v-text="$ml.with(online).get('serverOnline')"></div>
						</div>
						<div class="mdi mdi-minecraft"></div>
					</div>
					<div class="logo-wrap">
						<div class="logo"></div>
					</div>
					<div class="discord-wrap">
						<div class="mdi mdi-discord"></div>
						<div class="content">
							<div class="title" v-text="$ml.get('discord')"></div>
							<div class="subtitle" v-text="$ml.with(discord).get('discordOnline')"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>

export default {
	name: 'header',
	data: function(){
		return {
			online:87,
			discord:583
		}
	},
	mounted: function() {
	}
}
</script>
