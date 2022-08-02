import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for certifications
 */
class CertificationService {
	async getMovieList() {
		try {
			return await apiMovieDB()
				.get(`certification/movie/list${generateQuery()}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getTvList() {
		try {
			return await apiMovieDB()
				.get(`certification/tv/list${generateQuery()}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new CertificationService()
