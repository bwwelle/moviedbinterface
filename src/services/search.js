import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for search
 */
class SearchService {
	async getMovie(options) {
		try {
			return await apiMovieDB()
				.get(`search/movie${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getCollection(options) {
		try {
			return await apiMovieDB()
				.get(`search/collection${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getTv(options) {
		try {
			return await apiMovieDB()
				.get(`search/tv${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getPerson(options) {
		try {
			return await apiMovieDB()
				.get(`search/person${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getCompany(options) {
		try {
			return await apiMovieDB()
				.get(`search/company${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getKeyword(options) {
		try {
			return await apiMovieDB()
				.get(`search/keyword${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getMulti(options) {
		try {
			return await apiMovieDB()
				.get(`search/multi${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new SearchService()
