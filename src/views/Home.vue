<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<vs-button :active="active == 0" @click="active = 0">Active</vs-button>
		<vs-button :active="active == 1" @click="active = 1">Default</vs-button>
		<vs-button disabled>Disabled</vs-button>
	</div>
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
