import axios from 'axios'

const api_key = process.env.VUE_APP_MOVIE_API_KEY
const base_uri = process.env.VUE_APP_BASE_URL
const images_uri = 'http://image.tmdb.org/t/p/'
const language = 'en-US'

export function generateQuery(options) {
	var myOptions, query, option

	myOptions = options || {}
	query = '?api_key=' + api_key + '&language=' + language

	if (Object.keys(myOptions).length > 0) {
		for (option in myOptions) {
			if (
				Object.prototype.hasOwnProperty.call(myOptions, option) &&
				option !== 'id' &&
				option !== 'body'
			) {
				query = query + '&' + option + '=' + myOptions[option]
			}
		}
	}
	return query
}

export function getImage(options) {
	return images_uri + options.size + '/' + options.file
}

/**
 * Returns axios instance with
 * MovieDB endpoint
 */
export function apiMovieDB() {
	return axios.create({
		baseURL: base_uri
	})
}
