import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for finding
 */
class FindService {
	async getById(options) {
		try {
			return await apiMovieDB()
				.get(`find/${options.id}${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new FindService()
