import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for tv episodes
 */
class TVEpisodeService {
	async getById(options) {
		try {
			return await apiMovieDB()
				.get(
					`tv/${options.id}/season/${options.season_number}/episode/${
						options.episode_number
					}${generateQuery(options)}`
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
				.get(`tv/episode/${options.id}/changes${generateQuery(options)}`)
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
					`tv/${options.id}/season/${options.season_number}/episode/${
						options.episode_number
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
					`tv/${options.id}/season/${options.season_number}/episode/${
						options.episode_number
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
					`tv/${options.id}/season/${options.season_number}/episode/${
						options.episode_number
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
					`tv/${options.id}/season/${options.season_number}/episode/${
						options.episode_number
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
					`tv/${options.id}/season/${options.season_number}/episode/${
						options.episode_number
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
					`tv/${options.id}/season/${options.season_number}/episode/${
						options.episode_number
					}/videos${generateQuery(options)}`
				)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async rate(options, rate) {
		try {
			return await apiMovieDB()
				.post(
					`tv/${options.id}/season/${options.season_number}/episode/${
						options.episode_number
					}/rating${generateQuery(options)}`,
					{
						value: rate
					}
				)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async rateGuest(options, rate) {
		try {
			return await apiMovieDB()
				.post(
					`tv/${options.id}/season/${options.season_number}/episode/${
						options.episode_number
					}/rating${generateQuery(options)}`,
					{
						value: rate
					}
				)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async removeRate(options) {
		try {
			return await apiMovieDB()
				.delete(
					`tv/${options.id}/season/${options.season_number}/episode/${
						options.episode_number
					}/rating${generateQuery(options)}`
				)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async removeRateGuest(options) {
		try {
			return await apiMovieDB()
				.delete(
					`tv/${options.id}/season/${options.season_number}/episode/${
						options.episode_number
					}/rating${generateQuery(options)}`
				)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new TVEpisodeService()
