import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for collections
 */
class CollectionService {
	async getDetails(options) {
		try {
			return await apiMovieDB()
				.get(`collection/${options.id}${generateQuery(options)}`)
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
				.get(`collection/${options.id}/images${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getTranslations(options) {
		try {
			return await apiMovieDB()
				.get(`collection/${options.id}/translations${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}
export default new CollectionService()
