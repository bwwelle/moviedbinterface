module.exports = {
	root: true,
	env: {
		node: true
	},
	globals: {
		d3: 'readonly',
		$: 'readonly'
	},
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
		'plugin:prettier/recommended'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': 'warn',
		'no-debugger': 'warn'
	},
	overrides: [
		{
			files: ['**/*.test.js'],
			env: {
				jest: true
			}
		}
	]
}
