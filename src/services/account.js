import { generateQuery, apiMovieDB } from '@/utilities/api-utils.js'

/**
 * API calls for Accounts
 */
class AccountService {
	async getInformation(options) {
		try {
			return await apiMovieDB()
				.get(`account${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getLists(options) {
		try {
			return await apiMovieDB()
				.get(`account/${options.id}/lists${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getFavoritesMovies(options) {
		try {
			return await apiMovieDB()
				.get(`account/${options.id}/favorite/movies${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getFavoritesTvShows(options) {
		try {
			return await apiMovieDB()
				.get(`account/${options.id}/favorite/tv?${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async addFavorite(options) {
		const body = {
			media_type: options.media_type,
			media_id: options.media_id,
			favorite: options.favorite
		}

		try {
			return await apiMovieDB()
				.post(`account/${options.id}/favorite${generateQuery(options)}`, body)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getRatedMovies(options) {
		try {
			return await apiMovieDB()
				.get(`account/${options.id}/rated/movies${generateQuery(options)}`)
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
				.get(`account/${options.id}/rated/tv${generateQuery(options)}`)
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
				.get(`account/${options.id}rated/tv/episodes${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getMovieWatchlist(options) {
		try {
			return await apiMovieDB()
				.get(`account/${options.id}/watchlist/movies${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async getTvShowsWatchlist(options) {
		try {
			return await apiMovieDB()
				.get(`account/${options.id}/watchlist/tv${generateQuery(options)}`)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}

	async addToWatchlist(options) {
		const body = {
			media_type: options.media_type,
			media_id: options.media_id,
			watchlist: options.watchlist
		}

		try {
			return await apiMovieDB()
				.post(`account/${options.id}/watchlist${generateQuery(options)}`, body)
				.then(response => {
					return { data: response.data, success: true }
				})
		} catch (error) {
			return { response: error.response, success: false }
		}
	}
}

export default new AccountService()
