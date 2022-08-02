import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for people
 */
class PeopleService {
	async getById(options) {
		try {
			return await apiMovieDB()
				.get(`person/${options.id}${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getMovieCredits(options) {
		try {
			return await apiMovieDB()
				.get(`person/${options.id}/movie_credits${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getTvCredits(options) {
		try {
			return await apiMovieDB()
				.get(`person/${options.id}/tv_credits${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getCredits(options) {
		try {
			return await apiMovieDB()
				.get(`person/${options.id}/combined_credits${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getExternalIds(options) {
		try {
			return await apiMovieDB()
				.get(`person/${options.id}/external_ids${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getImages(options) {
		try {
			return await apiMovieDB()
				.get(`person/${options.id}/images${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getTaggedImages(options) {
		try {
			return await apiMovieDB()
				.get(`person/${options.id}/tagged_images${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getChanges(options) {
		try {
			return await apiMovieDB()
				.get(`person/${options.id}/changes${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getPopular(options) {
		try {
			return await apiMovieDB()
				.get(`person/popular${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getLatest() {
		try {
			return await apiMovieDB()
				.get(`person/latest${generateQuery()}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new PeopleService()
