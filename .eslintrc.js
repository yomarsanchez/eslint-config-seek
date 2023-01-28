const prettierOptions = require('./.prettierrc.js')

const IMPORT_SORT_GROUPS = [
  // Side effect and polyfill imports.
  ['^\\u0000'],
  // Built-in node dependencies
  [
    '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)'
  ],
  // Packages. `react` and `next/` related packages come first.
  ['^react', '^next'],
  // Standalone packages.
  ['^\\w'],
  // Material UI organization packages.
  // Core organization packages.
  // Generic organization packages.
  // Components organization packages.
  ['^@mui', '^@core', '^@', '^@components'],
  // Relative imports. Put `./` last.
  ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
  // Style imports.
  ['^.+\\.s?css$']
]

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false
  },
  extends: [
    'standard',
    // 'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['simple-import-sort', 'import', 'unused-imports'],
  rules: {
    // Error prevention
    'no-await-in-loop': 'error',
    'no-constant-binary-expression': 'error',
    'no-promise-executor-return': 'error',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        allowNamedExports: false
      }
    ],
    'require-atomic-updates': 'error',

    // Good practises
    'no-console': ['error', { allow: ['error'] }],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-lonely-if': 'error',
    'no-param-reassign': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'space-before-function-paren': 'off',
    radix: 'error',

    // Style
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' }
    ],

    // Plugins (import, prettier, simple-import-sort)
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'prettier/prettier': ['error', prettierOptions],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: IMPORT_SORT_GROUPS
      }
    ],
    'unused-imports/no-unused-imports': 'error',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ]
  }
}
