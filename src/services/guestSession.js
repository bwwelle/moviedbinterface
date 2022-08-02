import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for guest sessions
 */
class GuestSessionService {
	async getRatedMovies(options) {
		try {
			return await apiMovieDB()
				.get(`guest_session/${options.id}/rated/movies${generateQuery()}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getRatedTvShows(options) {
		try {
			return await apiMovieDB()
				.get(`guest_session/${options.id}/rated/tv${generateQuery()}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getRatedTvEpisodes(options) {
		try {
			return await apiMovieDB()
				.get(`guest_session/${options.id}/rated/tv/episodes${generateQuery()}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new GuestSessionService()
