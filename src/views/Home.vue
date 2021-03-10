<template>
	<section class="home">
		<div class="wrapper">
			<div class="card mb-20">
				<div class="text-center pb-10"><strong><span class="color-orange">Добро пожаловать</span> в наш магазин.</strong></div>
				<div style="padding:0 150px;" class="text-center">
					<strong>ytya<span class="color-orange">Ru</span></strong> - комплекс серверов выживания, где каждый найдет для себя тот самый идеальный сервер.
					Все вырученные средства идут на поддержку и развитие проекта.
				</div>
				<div class="text-center pt-10">Спасибо за ваш вклад!</div>
			</div>
			<div class="card mb-20">
				<div class="on-horse"></div>
				<div class="give_five"></div>
				<h1 class="text-center pb-20">Выберите <span>сервер</span></h1>
				<div class="server-list">
					<div class="server">
						<div class="image" style="background-image:url(https://files.hotmc.ru/upload/tt/doocctmegup2v44v7fiu4augyy2bcpugye9lh0g7fra1j1oon3kosgchn7hezur6.png?1601470726)">
							<div class="title">Vanilla</div>
						</div>
					</div>
					<div class="server">
						<div class="image" style="background-image:url(http://cdn.minecraftrating.ru/storage/servers/94615/7839556cb2179cc_big.png)">
							<div class="title">Classic</div>
						</div>
					</div>
					<div class="server">
						<div class="image" style="background-image:url(http://cdn.minecraftrating.ru/storage/servers/94615/83ce5c1b6568af0_big.png)">
							<div class="title">Peaceful</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

export default {
	name: 'Home',
	components: {
	},
	data: function(){
		return {
			active: 0
		}
	}
}
</script>
