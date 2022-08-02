import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for lists
 */
class ListService {
	async getById(options) {
		try {
			return await apiMovieDB()
				.get(`list/${options.id}${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getStatusById(options) {
		try {
			return await apiMovieDB()
				.get(`list/${options.id}/item_status${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async addList(options) {
		const body = {
			name: options.name,
			description: options.description
		}

		delete options.name
		delete options.description

		if (Object.prototype.hasOwnProperty.call(options, 'language')) {
			body['language'] = options.language

			delete options.language
		}

		try {
			return await apiMovieDB()
				.post(`list${generateQuery(options)}`, body)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async addItem(options) {
		const body = {
			media_id: options.media_id
		}

		try {
			return await apiMovieDB()
				.post(`list/${options.id}/add_item${generateQuery(options)}`, body)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async removeItem(options) {
		var body

		body = {
			media_id: options.media_id
		}

		try {
			return await apiMovieDB()
				.post(`list/${options.id}/remove_item${generateQuery(options)}`, body)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async removeList(options) {
		try {
			return await apiMovieDB()
				.delete(`list/${options.id}${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async clearList(options) {
		try {
			return await apiMovieDB()
				.post(`list/${options.id}/clear${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new ListService()
