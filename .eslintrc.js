module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    project: './tsconfig.json',
    sourceType: 'module'
  },
  settings: {
    react: { version: 'detect' }
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint'
  ],
  rules:  {
    'react/jsx-filename-extension': [2, { 'extensions': ['.ts', '.tsx'] }],
    'import/extensions': [2, { 'extensions': ['.ts', '.tsx'], 'css': 'always' }]
  },
};
