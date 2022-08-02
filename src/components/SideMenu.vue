<template>
	<v-container class="side-menu-container">
		<v-container class="side-menu-container__profile">
			<v-row>
				<v-list color="rgb(255, 0, 0, 0)">
					<v-list-item>
						<v-list-item-avatar class="side-menu-container__profile-avatar">
							<v-avatar size="27">
								<v-img :src="profileAvatar"></v-img>
							</v-avatar>
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title class="white--text">
								{{ profileName }}
							</v-list-item-title>
							<v-list-item-title
								class="white--text side-menu-container__profile-location"
							>
								{{ profileLocation }}
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-row>
			<v-divider class="side-menu-container__profile-divider"></v-divider>
		</v-container>
		<v-container class="side-menu-container__menu">
			<v-list dense color="rgb(255, 0, 0, 0)">
				<v-subheader
					class="grey--text font-weight-bold side-menu-container__menu-subheader"
				>
					MEDIA
				</v-subheader>
				<v-list-item-group v-model="selected">
					<v-list-item
						v-for="topItem in topSideMenu"
						:value="topItem"
						:key="topItem.id"
						link
					>
						<v-list-item-content>
							<v-list-item-title class="font-weight-bold white--text">
								{{ topItem.title }}
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
			<v-list dense color="rgb(255, 0, 0, 0)">
				<v-subheader
					class="grey--text font-weight-bold side-menu-container__menu-subheader"
				>
					ACCOUNT
				</v-subheader>
				<v-list-item-group v-model="selected">
					<v-list-item
						v-for="bottomItem in bottomSideMenu"
						:value="bottomItem"
						:key="bottomItem.id"
						link
					>
						<v-list-item-content>
							<v-list-item-title class="font-weight-bold white--text">
								{{ bottomItem.title }}
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-container>
		<v-container class="side-menu-container__auth">
			<v-divider class="side-menu-container__auth-divider"></v-divider>
			<v-btn
				color="white"
				class="text-none side-menu-container__auth-button"
				text
			>
				Sign Out
			</v-btn>
		</v-container>
	</v-container>
</template>
<script>
import topSideMenu from '@/utilities/top-side-menu-items.json'
import bottomSideMenu from '@/utilities/bottom-side-menu-items.json'

export default {
	name: 'SideMenu',
	data() {
		return {
			profileAvatar: require('@/assets/Portrait1.png'),
			profileName: 'Bradley Weller',
			profileLocation: 'Chicago, Il., U.S.',
			selected: {
				index: 4,
				title: 'Games',
				href: 'https://github.com/vuetifyjs/awesome-vuetify'
			},
			topSideMenu,
			bottomSideMenu
		}
	},
	methods: {}
}
</script>
<style lang="scss" scoped>
@import '../style/side-menu.scss';
</style>
