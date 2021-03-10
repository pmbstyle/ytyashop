<template>
	<header>
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
			<div class="bar"></div>
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
