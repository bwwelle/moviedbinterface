import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for Configuration
 */
class ConfigurationService {
	async getConfiguration() {
		try {
			return await apiMovieDB()
				.get(`configuration${generateQuery()}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getCountries() {
		try {
			return await apiMovieDB()
				.get(`configuration/countries${generateQuery()}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getJobs() {
		try {
			return await apiMovieDB()
				.get(`configuration/jobs${generateQuery()}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getLanguages() {
		try {
			return await apiMovieDB()
				.get(`configuration/languages${generateQuery()}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getPrimaryTranslations() {
		try {
			return await apiMovieDB()
				.get(`configuration/primary_translations${generateQuery()}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getTimezones() {
		try {
			return await apiMovieDB()
				.get(`configuration/timezones${generateQuery()}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new ConfigurationService()
