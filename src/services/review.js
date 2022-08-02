import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for reviews
 */
class ReviewService {
	async getById(options) {
		try {
			return await apiMovieDB()
				.get(`review/${options.id}${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new ReviewService()
