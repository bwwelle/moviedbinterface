import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for changes
 */
class ChangeService {
	async getMovieChanges(options) {
		try {
			return await apiMovieDB()
				.get(`movie/changes${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getPersonChanges(options) {
		try {
			return await apiMovieDB()
				.get(`person/changes${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getTvChanges(options) {
		try {
			return await apiMovieDB()
				.get(`tv/changes${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new ChangeService()
