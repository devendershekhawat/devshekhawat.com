import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'react/react-in-jsx-scope': 0,
      '@typescript-eslint/no-non-null-asserted-optional-chain': 0,
      'max-len': ['error', { code: 160, ignoreComments: true }],
      'quotes': ['error', 'single'],
      'react/jsx-uses-react': 0,
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
  }
];