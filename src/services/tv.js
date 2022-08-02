import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for television
 */
class TVService {
	async getById(options) {
		try {
			return await apiMovieDB()
				.get(`tv/${options.id}${generateQuery(options)}`)
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
				.get(`tv/${options.id}/account_states${generateQuery(options)}`)
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
				.get(`tv/${options.id}/account_states${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getAlternativeTitles(options) {
		try {
			return await apiMovieDB()
				.get(`tv/${options.id}/alternative_titles${generateQuery(options)}`)
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
				.get(`tv/${options.id}/changes${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getContentRatings(options) {
		try {
			return await apiMovieDB()
				.get(`tv/${options.id}/content_ratings${generateQuery(options)}`)
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
				.get(`tv/${options.id}/credits${generateQuery(options)}`)
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
				.get(`tv/${options.id}/external_ids${generateQuery(options)}`)
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
				.get(`tv/${options.id}/images${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getKeywords(options) {
		try {
			return await apiMovieDB()
				.get(`tv/${options.id}/keywords${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getRecommendations(options) {
		try {
			return await apiMovieDB()
				.get(`tv/${options.id}/recommendations${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getReviews(options) {
		try {
			return await apiMovieDB()
				.get(`tv/${options.id}/reviews${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getScreenedTheatrically(options) {
		try {
			return await apiMovieDB()
				.get(`tv/${options.id}/screened_theatrically${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getSimilar(options) {
		try {
			return await apiMovieDB()
				.get(`tv/${options.id}/similar${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getTranslations(options) {
		try {
			return await apiMovieDB()
				.get(`tv/${options.id}/translations${generateQuery(options)}`)
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
				.get(`tv/${options.id}/videos${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getAiringToday(options) {
		try {
			return await apiMovieDB()
				.get(`tv/airing_today${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getLatest() {
		try {
			return await apiMovieDB()
				.get(`tv/latest${generateQuery()}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getOnTheAir(options) {
		try {
			return await apiMovieDB()
				.get(`tv/on_the_air${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getPopular(options) {
		try {
			return await apiMovieDB()
				.get(`tv/popular${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getTopRated(options) {
		try {
			return await apiMovieDB()
				.get(`tv/top_rated${generateQuery(options)}`)
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
				.post(`tv/${options.id}/rating${generateQuery(options)}`, {
					value: rate
				})
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
				.post(`tv/${options.id}/rating${generateQuery(options)}`, {
					value: rate
				})
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
				.delete(`tv/${options.id}/rating${generateQuery(options)}`)
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
				.delete(`tv/${options.id}/rating${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new TVService()
