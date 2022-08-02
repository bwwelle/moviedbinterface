import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for TV Season
 */
class TVSeasonService {
	async getById(options) {
		try {
			return await apiMovieDB()
				.get(
					`tv/${options.id}/season/${options.season_number}${generateQuery(
						options
					)}`
				)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getChanges(options) {
		try {
			return await apiMovieDB()
				.get(`tv/season/${options.id}/changes${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getAccountStates(options) {
		try {
			return await apiMovieDB()
				.get(
					`tv/${options.id}/season/${
						options.season_number
					}/account_states${generateQuery(options)}`
				)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getAccountStatesGuest(options) {
		try {
			return await apiMovieDB()
				.get(
					`tv/${options.id}/season/${
						options.season_number
					}/account_states${generateQuery(options)}`
				)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getCredits(options) {
		try {
			return await apiMovieDB()
				.get(
					`tv/${options.id}/season/${
						options.season_number
					}/credits${generateQuery(options)}`
				)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getExternalIds(options) {
		try {
			return await apiMovieDB()
				.get(
					`tv/${options.id}/season/${
						options.season_number
					}/external_ids${generateQuery(options)}`
				)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getImages(options) {
		try {
			return await apiMovieDB()
				.get(
					`tv/${options.id}/season/${
						options.season_number
					}/images${generateQuery(options)}`
				)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getVideos(options) {
		try {
			return await apiMovieDB()
				.get(
					`tv/${options.id}/season/${
						options.season_number
					}/videos${generateQuery(options)}`
				)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new TVSeasonService()
