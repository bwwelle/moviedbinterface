<template>
	<v-container class="movie-list">
		<v-row no-gutters class="movie-list__row">
			<v-col cols="3" class="movie-list__header">Movie List</v-col>
			<v-col cols="5" class="movie-list__header-sort-header">
				<v-container class="pa-0 pr-2">Sort:</v-container>
			</v-col>
			<v-col cols="1" class="movie-list__header-sort">
				<v-container class="pa-0 pr-1">
					Title
					<v-icon
						ref="titleDescButton"
						:disabled="titleSortAscendingToggle"
						class="top-menu__control-button"
						size="15"
						color="black"
						@click="onSortClick({ field: 'original_title', direction: 'desc' })"
					>
						mdi-sort-alphabetical-descending
					</v-icon>
					<v-icon
						ref="titleAscButton"
						class="top-menu__control-button"
						:disabled="!titleSortAscendingToggle"
						size="15"
						color="black"
						@click="onSortClick({ field: 'original_title', direction: 'asc' })"
					>
						mdi-sort-alphabetical-ascending
					</v-icon>
				</v-container>
			</v-col>
			<v-col cols="3" no-gutters class="movie-list__header-sort-date pr-1">
				<v-container class="py-0">
					Release Date
					<v-icon
						ref="dateDescButton"
						class="px-1"
						:disabled="dateSortAscendingToggle"
						size="15"
						color="black"
						@click="
							onSortClick({ field: 'primary_release_date', direction: 'desc' })
						"
					>
						mdi-sort-calendar-descending
					</v-icon>
					<v-icon
						ref="dateAscButton"
						:disabled="!dateSortAscendingToggle"
						size="15"
						color="black"
						@click="
							onSortClick({ field: 'primary_release_date', direction: 'asc' })
						"
					>
						mdi-sort-calendar-ascending
					</v-icon>
				</v-container>
			</v-col>
		</v-row>
		<v-row
			v-for="(movieGroup, groupIndex) in movies"
			:key="groupIndex"
			no-gutters
		>
			<v-col
				v-for="(movie, movieIndex) in movieGroup"
				:key="movieIndex"
				class="movie-list__col"
				no-gutters
			>
				<v-tooltip bottom>
					<template v-slot:activator="{ on, attrs }">
						<v-img
							v-if="movie.backdropPath"
							rounded
							height="235"
							width="150"
							:contain="true"
							:src="movie.backdropPath"
							class="movie-list__image"
							v-bind="attrs"
							v-on="on"
							ref="openDialogButton"
							@click.stop="openDialog(movie)"
						></v-img>
						<v-img
							v-else
							rounded
							height="235"
							width="150"
							:contain="true"
							src="../assets/noposter.jpg"
							class="movie-list__image"
							v-bind="attrs"
							v-on="on"
							ref="openDialogButton"
							@click.stop="openDialog(movie)"
						>
							<span class="movie-list__image-span">
								{{ movie.title }}
							</span>
						</v-img>
					</template>
					<span class="movie-list__tool-tip">
						{{ movie.title }}
						<br />
						{{ movie.releaseDate }}
						<br />
						{{ movie.genre }}
					</span>
				</v-tooltip>
			</v-col>
		</v-row>
		<v-row no-gutters>
			<v-col no-gutters>
				<v-pagination
					class="movie-list__pagination"
					ref="paginationControl"
					v-model="currentPage"
					:length="totalPageCount"
					:total-visible="totalPageButtonsVisible"
					prev-icon="mdi-menu-left"
					next-icon="mdi-menu-right"
					@input="onPageClick"
				></v-pagination>
			</v-col>
		</v-row>
		<v-dialog v-model="dialog" max-width="290">
			<v-card>
				<v-card-title class="text-h5">
					<p class="movie-list__dialog">
						{{ dialogMovieTitle }}
					</p>
				</v-card-title>

				<v-card-text>
					{{ dialogMovieDescription }}
				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>

					<v-btn color="green darken-1" text @click="dialog = false">
						Close
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-container>
</template>
<script>
export default {
	name: 'MovieList',
	props: {
		movieListCall: {
			type: Function,
			required: true
		}
	},
	data() {
		return {
			currentGenre: 'All',
			currentYear: new Date().getFullYear(),
			totalPageButtonsVisible: 7,
			currentPage: 1,
			sortBy: 'primary_release_date.desc',
			totalPageCount: 20,
			movies: [],
			titleSortAscendingToggle: true,
			dateSortAscendingToggle: true,
			dialog: false,
			dialogMovieTitle: null,
			dialogMovieDescription: null
		}
	},
	mounted() {
		this.setMovieList()
	},
	methods: {
		async setMovieList() {
			this.movieListCall(this.currentPage, this.sortBy).then(response => {
				if (response.success) {
					this.totalPageCount = response.totalPageCount
					this.movies = response.data
				} else {
					// eslint-disable-next-line
					console.log(response?.detail?.msg)
				}
			})
		},
		openDialog(movie) {
			this.dialogMovieTitle = movie.title
			this.dialogMovieDescription = movie.description
			this.dialog = true
		},
		onPageClick(page) {
			this.currentPage = page

			this.setMovieList()
		},
		toggleTitleAscSort() {
			this.titleSortAscendingToggle = !this.titleSortAscendingToggle
		},
		toggleDateAscSort() {
			this.dateSortAscendingToggle = !this.dateSortAscendingToggle
		},
		onSortClick(sort) {
			this.sortBy = `${sort.field}.${sort.direction}`
			this.setMovieList()

			switch (sort.field) {
				case 'original_title':
					this.toggleTitleAscSort()

					break
				case 'primary_release_date':
					this.toggleDateAscSort()

					break
			}
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../style/movie-list.scss';
</style>
