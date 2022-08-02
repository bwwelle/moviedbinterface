<template>
	<v-container class="recently-played">
		<v-container class="recently-played__divider-container">
			<v-divider
				class="recently-played__divider-container-menu-divider"
			></v-divider>
		</v-container>
		<v-row no-gutters class="pt-1">
			<v-col class="recently-played__header">Recently Played</v-col>
		</v-row>
		<v-row no-gutters>
			<v-col
				v-for="(movie, index) in movies"
				:key="index"
				class="recently-played__col"
				no-gutters
			>
				<v-img
					height="150"
					width="250"
					:src="movie.backdropPath"
					:contain="true"
					class="recently-played__col-image"
					v-bind:class="{
						'recently-played__col-image__not-playing':
							!recentlyPlayed[index].playing
					}"
				>
					<span class="recently-played__col-image__span">
						{{ movie.title }}
					</span>
				</v-img>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import MovieService from '@/services/movie'

export default {
	name: 'RecentlyPlayed',
	data() {
		return {
			recentlyPlayed: [
				{ playing: false, id: 400650 },
				{ playing: false, id: 10191 },
				{ playing: true, id: 369972 }
			],
			movieImageURL: 'https://image.tmdb.org/t/p/w300',
			movies: []
		}
	},
	mounted() {
		this.fetchBackdrops()
	},
	methods: {
		async fetchBackdrops() {
			const _this = this

			await Promise.all(
				this.recentlyPlayed.map(movie => {
					return MovieService.getById({
						id: movie.id
					})
				})
			).then(response => {
				if (!response.map(element => element.success).includes(false)) {
					_this.movies = response.map(item => {
						return {
							backdropPath: `${_this.movieImageURL}${item.data.backdrop_path}`,
							title: item.data.original_title
						}
					})
				} else {
					return { detail: response?.detail?.msg, success: false }
				}
			})
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../style/recently-played.scss';
</style>
