<template>
	<v-container class="main-content">
		<v-container class="main-content__menu">
			<TopMenu @genreChanged="genreChanged" />
		</v-container>
		<v-container class="main-content__movies">
			<v-row no-gutters>
				<v-col cols="12">
					<RecentlyPlayed />
					<MovieList
						:movie-list-call="fetchMovieList"
						:key="refreshMovieList"
					/>
				</v-col>
			</v-row>
		</v-container>
		<v-container v-if="showBlur" class="main-content__blur"></v-container>
		<v-container v-else class="main-content__hide-blur"></v-container>
	</v-container>
</template>
<script>
import TopMenu from '@/components/TopMenu'
import RecentlyPlayed from '@/components/RecentlyPlayed'
import MovieList from '@/components/MovieList'
import DiscoverService from '@/services/discover'
import genres from '@/utilities/genre-mapping.json'

export default {
	name: 'MainContent',
	components: {
		TopMenu,
		RecentlyPlayed,
		MovieList
	},
	data() {
		return {
			genreList: genres,
			selectedGenre: [16],
			showBlur: true,
			movieListDataCall: this.fetchMovieList(1),
			movieImageURL: 'https://image.tmdb.org/t/p/w300',
			refreshMovieList: 0
		}
	},
	created() {
		const _this = this

		window.addEventListener(
			'scroll',
			() => {
				const myDiv = document.getElementsByClassName('main-content__movies')[0]
				if (myDiv.offsetHeight + myDiv.scrollTop >= myDiv.scrollHeight - 50) {
					_this.showBlur = false
				} else {
					_this.showBlur = true
				}
			},
			true
		)
	},
	methods: {
		async fetchMovieList(requestedPage, sortBy) {
			const _this = this
			let returnedMovies = null
			let totalPageCount = 0

			return await DiscoverService.getMovie({
				region: 'US',
				certification_country: 'US',
				'vote_count.gte': 1000,
				page: requestedPage,
				with_original_language: 'en',
				'primary_release_date.lte': new Date()
					.toJSON()
					.slice(0, 10)
					.replace(/-/g, '-'),
				sort_by: sortBy,
				watch_region: 'US',
				with_genres: _this.selectedGenre
			}).then(response => {
				if (response.success) {
					totalPageCount =
						response.data.total_pages > 500 ? 500 : response.data.total_pages

					returnedMovies = response.data.results.map(item => {
						return {
							backdropPath: item.poster_path
								? `${_this.movieImageURL}${item.poster_path}`
								: item.poster_path,
							title: item.original_title,
							releaseDate: new Date(item.release_date).getFullYear(),
							genre: _this.genreList
								.filter(({ value }) => item.genre_ids.includes(value))
								.map(genre => genre.text)
								.join(' | '),
							description: item.overview
						}
					})

					let newMovieArray = []
					let newArray = []
					let count = 0

					for (var i = 0; i < returnedMovies.length; i++) {
						if (count == 5) {
							newMovieArray.push(newArray)
							newArray = [returnedMovies[i]]
							count = 1
						} else {
							newArray.push(returnedMovies[i])
							count++
						}
					}

					if (count > 1) {
						newMovieArray.push(newArray)
					}

					return {
						totalPageCount: totalPageCount,
						data: newMovieArray,
						success: true
					}
				} else {
					return { detail: response?.detail?.msg, success: false }
				}
			})
		},
		genreChanged(newGenre) {
			this.selectedGenre = newGenre

			this.refreshMovieList++
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../style/main-content.scss';
</style>
