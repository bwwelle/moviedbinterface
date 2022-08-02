import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for credits
 */
class CreditService {
	async getDetails(options) {
		try {
			return await apiMovieDB()
				.get(`credit/${options.id}${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new CreditService()
