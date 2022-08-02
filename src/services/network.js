import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for networks
 */
class NetworkService {
	async getById(options) {
		try {
			return await apiMovieDB()
				.get(`network/${options.id}${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getAlternativeNames(options) {
		try {
			return await apiMovieDB()
				.get(`network/${options.id}/alternative_names${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new NetworkService()
