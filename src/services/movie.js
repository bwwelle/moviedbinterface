import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for movies
 */
class MovieService {
	async getById(options) {
		try {
			return await apiMovieDB()
				.get(`movie/${options.id}${generateQuery(options)}`)
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
				.get(`movie/${options.id}/account_states${generateQuery(options)}`)
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
				.get(`movie/${options.id}/account_states${generateQuery(options)}`)
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
				.get(`movie/${options.id}/alternative_titles${generateQuery(options)}`)
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
				.get(`movie/${options.id}/changes${generateQuery(options)}`)
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
				.get(`movie/${options.id}/credits${generateQuery(options)}`)
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
				.get(`movie/${options.id}/external_ids${generateQuery(options)}`)
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
				.get(`movie/${options.id}/images${generateQuery(options)}`)
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
				.get(`movie/${options.id}/keywords${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getReleases(options) {
		try {
			return await apiMovieDB()
				.get(`movie/${options.id}/release_dates${generateQuery(options)}`)
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
				.get(`movie/${options.id}/videos${generateQuery(options)}`)
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
				.get(`movie/${options.id}/translations${generateQuery(options)}`)
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
				.get(`movie/${options.id}/recommendations${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getSimilarMovies(options) {
		try {
			return await apiMovieDB()
				.get(`movie/${options.id}/similar${generateQuery(options)}`)
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
				.get(`movie/${options.id}/reviews${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getLists(options) {
		try {
			return await apiMovieDB()
				.get(`movie/${options.id}/lists${generateQuery(options)}`)
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
				.get(`movie/latest${generateQuery()}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getUpcoming(options) {
		try {
			return await apiMovieDB()
				.get(`movie/upcoming${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getNowPlaying(options) {
		try {
			return await apiMovieDB()
				.get(`movie/now_playing${generateQuery(options)}`)
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
				.get(`movie/popular${generateQuery(options)}`)
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
				.get(`movie/top_rated${generateQuery(options)}`)
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
				.post(`movie/${options.id}/rating${generateQuery(options)}`, {
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
				.post(`movie/${options.id}/rating${generateQuery(options)}`, {
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
				.delete(`movie/${options.id}/rating${generateQuery(options)}`)
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
				.delete(`movie/${options.id}/rating${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new MovieService()
