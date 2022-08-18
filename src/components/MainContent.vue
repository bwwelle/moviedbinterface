<template>
	<v-container class="main-content">
		<v-container class="main-content__menu">
			<TopMenu @genreChanged="genreChanged" />
		</v-container>
		<v-container class="main-content__movies">
			<v-row no-gutters>
				<v-col>
					<RecentlyPlayed />
					<MovieList
						v-if="showMovieList"
						:movie-list-call="fetchMovieList"
						:key="refreshMovieList"
					/>
					<v-container v-else class="pt-10 main-content__movies-message">
						No Movies Available For Filter Selected
					</v-container>
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
			showMovieList: false,
			genreList: genres,
			selectedGenre: [16],
			showBlur: true,
			movieListDataCall: this.fetchMovieList(),
			movieImageURL: 'https://image.tmdb.org/t/p/w300',
			refreshMovieList: 0
		}
	},
	created() {
		window.addEventListener(
			'scroll',
			() => {
				this.showBlur = !this.scrolledToBottom()
			},
			true
		)
	},
	methods: {
		async fetchMovieList(
			requestedPage = 1,
			sortBy = 'primary_release_date.desc,title.desc'
		) {
			let totalPageCount = 0
			let mainContentDiv = document.getElementsByClassName(
				'main-content__movies'
			)[0]

			if (mainContentDiv) {
				mainContentDiv.scrollTop = 0
			}

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
				with_genres: this.selectedGenre
			}).then(response => {
				if (response.success) {
					let movies = this.createMoviesArray(response.data.results)
					totalPageCount =
						response.data.total_pages > 500 ? 500 : response.data.total_pages

					this.showBlur = movies.length === 4 && mainContentDiv ? true : false
					this.showMovieList = totalPageCount > 0

					return {
						totalPageCount: totalPageCount,
						data: movies,
						success: true
					}
				} else {
					return { detail: response?.detail?.msg, success: false }
				}
			})
		},
		scrolledToBottom() {
			let mainContentDiv = document.getElementsByClassName(
				'main-content__movies'
			)[0]
			const divBottomPadding = 50

			return (
				mainContentDiv.scrollTop > 0 &&
				mainContentDiv.offsetHeight + mainContentDiv.scrollTop >=
					mainContentDiv.scrollHeight - divBottomPadding
			)
		},
		createMoviesArray(data) {
			return this.moviesIntoRows(
				data.map(item => {
					return {
						backdropPath: item.poster_path
							? `${this.movieImageURL}${item.poster_path}`
							: item.poster_path,
						title: item.original_title,
						releaseDate: new Date(item.release_date).getFullYear(),
						genre: this.genreList
							.filter(({ value }) => item.genre_ids.includes(value))
							.map(genre => genre.text)
							.join(' | '),
						description: item.overview
					}
				})
			)
		},
		moviesIntoRows(movies) {
			let newMovieArray = []
			let newArray = []
			let count = 0

			for (var i = 0; i < movies.length; i++) {
				if (count == 5) {
					newMovieArray.push(newArray)
					newArray = [movies[i]]
					count = 1
				} else {
					newArray.push(movies[i])
					count++
				}
			}

			if (count > 0 && count <= 5) {
				newMovieArray.push(newArray)
			}

			return newMovieArray
		},
		genreChanged(newGenre) {
			this.selectedGenre = newGenre

			this.showMovieList = true

			this.refreshMovieList++
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../style/main-content.scss';
</style>
