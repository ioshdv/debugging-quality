const js = require('@eslint/js');
const prettierPlugin = require('eslint-plugin-prettier');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jestPlugin = require('eslint-plugin-jest');

module.exports = [
  js.configs.recommended,

  {
    files: ['**/*.js'],
    ignores: ['node_modules/**', 'coverage/**'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: {
        window: 'readonly',
        document: 'readonly',
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        jest: 'readonly'
      }
    },
    plugins: {
      prettier: prettierPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      jest: jestPlugin
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'prettier/prettier': 'error',

      'no-debugger': 'error',
      'no-console': 'warn',

      eqeqeq: 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'consistent-return': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

      'react/prop-types': 'off',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/valid-expect': 'error'
    }
  }
];