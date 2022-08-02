import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for genres
 */
class GenresService {
	async getMovieList(options) {
		try {
			return await apiMovieDB()
				.get(`genre/movie/list${generateQuery(options)}`)
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
				.get(`genre/${options.id}/movies${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getTvList(options) {
		try {
			return await apiMovieDB()
				.get(`genre/tv/list${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new GenresService()
