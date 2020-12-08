module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'@react-native-community',
		'naver',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'prettier/prettier': 'off',
		quotes: 'off',
		'import/prefer-default-export': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'linebreak-style': 0,
		// production 환경에서는 on 으로 되어있어야 함.
		'no-console': 'off',
		'arrow-parens': ['error', 'always'],
	},
};
