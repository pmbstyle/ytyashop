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
			<div class="bar">
				<div class="wrapper">
					<div class="stats-wrap">
						<div class="content">
							<div class="title">mc.ytya.ru</div>
							<div class="subtitle">87 игроков онлайн</div>
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
							<div class="subtitle">583 Участников онлайн</div>
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
	components: {
	},
	data: function(){
		return {
			active: 0
		}
	}
}
</script>
