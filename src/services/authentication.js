import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for MovieDB authentication
 */
class AuthenticationService {
	async generateToken() {
		try {
			return await apiMovieDB()
				.get(`authentication/token/new${generateQuery()}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async askPermissions(options) {
		window.open(
			`https://www.themoviedb.org/authenticate/${options.token}?redirect_to=${options.redirect_to}`
		)
	}

	async validateUser(options) {
		try {
			return await apiMovieDB()
				.get(
					`authentication/token/validate_with_login${generateQuery(options)}`
				)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async generateSession(options) {
		try {
			return await apiMovieDB()
				.get(`authentication/session/new${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async generateGuestSession() {
		try {
			return await apiMovieDB()
				.get(`authentication/guest_session/new${generateQuery()}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new AuthenticationService()
