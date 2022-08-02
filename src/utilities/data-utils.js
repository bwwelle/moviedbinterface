/**
 * Return a mapped array with {value: 1, text: foo} structure
 * @param {Array} array to map to select/dropdown data
 * @returns {Array}
 */
export function mapToSelectData(array) {
	return array.map(i => {
		return {
			text: i,
			value: i
		}
	})
}
