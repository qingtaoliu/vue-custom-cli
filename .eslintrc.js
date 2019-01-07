module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true
  },
  extends: ['plugin:vue/strongly-recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'error', // allow async-await
    'generator-star-spacing': 'off', // allow debugger during development
    'max-len': ['error', { code: 100, ignoreUrls: true }],
    'no-confusing-arrow': 'error',
    'no-mixed-operators': 'error',
    'node/no-deprecated-api': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'vue/singleline-html-element-content-newline': [
      'off',
      {
        ignoreWhenNoAttributes: 0,
        ignoreWhenEmpty: 0,
        ignores: ['pre', 'textarea']
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
