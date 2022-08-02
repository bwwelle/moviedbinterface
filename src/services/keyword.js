import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for key words
 */
class KeyWordService {
	async getById(options) {
		try {
			return await apiMovieDB()
				.get(`keyword/${options.id}${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getMovies(options) {
		try {
			return await apiMovieDB()
				.get(`keyword/${options.id}/movies${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new KeyWordService()
