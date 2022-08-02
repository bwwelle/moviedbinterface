import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for discovery
 */
class DiscoveryService {
	async getMovie(options) {
		try {
			return await apiMovieDB()
				.get(`discover/movie${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getTvShow(options) {
		try {
			return await apiMovieDB()
				.get(`discover/tv${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new DiscoveryService()
