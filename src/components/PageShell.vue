<template>
	<v-container class="movie-interface" fill-height fluid>
		<v-row align="center" justify="center" no-gutters>
			<v-col cols="2">
				<SideMenu />
			</v-col>
			<v-col cols="10">
				<MainContent />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import MainContent from '@/components/MainContent'
import SideMenu from '@/components/SideMenu'

export default {
	name: 'PageShell',
	components: {
		MainContent,
		SideMenu
	}
}
</script>
<style lang="scss" scoped>
@import '../style/page-shell.scss';
</style>
