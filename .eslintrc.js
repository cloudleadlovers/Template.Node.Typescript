module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'import',
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-import-helpers'
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'lines-between-class-members': 'off',
    'no-await-in-loop': 'off',
    'no-console': ['error', { allow: ['error', 'info'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'ts': 'never'
      }
    ],
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', ['parent', 'sibling', 'index', '/~/', '/@/']],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ],
    '@typescript-eslint/interface-name-prefix': [
      'error', {
        'prefixWithI': 'always'
      }
    ]
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ],
  settings: {
    'import/extensions': ['.ts', '.js'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.js']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts']
      },
      typescript: {
        alwaysTryTypes: true
      }
    }
  }
};
