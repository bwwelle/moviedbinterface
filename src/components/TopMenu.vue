<template>
	<v-container class="top-menu">
		<v-row class="top-menu__row" no-gutters>
			<v-col cols="4" no-gutters>
				<v-container class="top-menu__filter">
					<v-select
						class="text-none top-menu__filter-dropdown pl-0"
						:items="genres"
						:value="selectedGenre"
						dense
						multiple
						@input="onGenreChange"
						label="Genre"
					>
						<template slot="selection" slot-scope="{ item, index }">
							<span v-if="!index">{{ item.text }}</span>
							<span
								class="grey--text top-menu__filter-dropdown__span"
								v-else-if="index === 1"
							>
								(+{{ selectedGenre.length - 1 }} others)
							</span>
						</template>
					</v-select>
					<v-select
						class="text-none top-menu__filter-dropdown pl-3"
						:items="years"
						multiple
						dense
						label="Release Year"
						@input="onYearChange"
					>
						<template slot="selection" slot-scope="{ item, index }">
							<span v-if="!index">{{ item.text }}</span>
							<span
								class="grey--text top-menu__filter-dropdown__span"
								v-else-if="index === 1"
							>
								(+{{ selectedYear.length - 1 }} others)
							</span>
						</template>
					</v-select>
				</v-container>
			</v-col>
			<v-col cols="4" class="top-menu__input-container">
				<v-text-field
					dense
					rounded
					outlined
					class="top-menu__input-container-input"
					placeholder="Search your interest..."
					prepend-inner-icon="mdi-magnify"
					hide-details="true"
				></v-text-field>
			</v-col>
			<v-col cols="4">
				<v-container class="top-menu__movie-player">
					First Man
					<v-icon class="top-menu__control-button" size="20" color="black">
						mdi-skip-backward
					</v-icon>
					<v-icon size="30" class="top-menu__control-button" color="black">
						mdi-play
					</v-icon>
					<v-icon size="20" class="top-menu__control-button" color="black">
						mdi-skip-forward
					</v-icon>
					<v-icon small class="top-menu__control-button" color="black">
						mdi-volume-high
					</v-icon>
				</v-container>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import genres from '@/utilities/genre-mapping.json'
import { mapToSelectData } from '@/utilities/data-utils.js'

export default {
	name: 'TopMenu',
	data() {
		return {
			genres,
			years: mapToSelectData(
				Array.from({ length: 51 }, (_, i) => new Date().getFullYear() - i)
			),
			selectedGenre: [16],
			selectedYear: []
		}
	},
	methods: {
		onGenreChange(newGenre) {
			this.selectedGenre = newGenre
			this.$emit('genreChanged', newGenre)
		},
		onYearChange(newYear) {
			this.selectedYear = newYear
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../style/top-menu.scss';
</style>
