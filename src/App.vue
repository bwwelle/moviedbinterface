<template>
	<v-app>
		<v-main>
			<PageShell />
		</v-main>
	</v-app>
</template>

<script>
import PageShell from './components/PageShell'

export default {
	name: 'App',

	components: {
		PageShell
	},

	data: () => ({
		//
	})
}
</script>
<style lang="scss" scoped>
@import './style/app.scss';
</style>
