module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "linebreak-style": 0,
    "semi": ["error", "never"],
    "no-param-reassign": 0,
    "no-use-before-define": 0,
    "comma-dangle": ["error", "never"],
    "jsx-props-no-spreading": 0,
    "react/jsx-props-no-spreading": 0,
    "react/forbid-prop-types": 0,
    "react/no-array-index-key": 0,
    "max-len": [2, {"code": 150, "ignoreUrls": true}]
  },
}
