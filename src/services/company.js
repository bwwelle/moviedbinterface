import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for companies
 */
class CompanyService {
	async getDetails(options) {
		try {
			return await apiMovieDB()
				.get(`company/${options.id}${generateQuery(options)}`)
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
				.get(`company/${options.id}/alternative_names${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new CompanyService()
